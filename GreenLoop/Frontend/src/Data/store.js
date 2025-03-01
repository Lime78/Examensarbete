import { create } from 'zustand';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCxQcwfuO964Qt2z3lOFP4sXJYG6NzD9Lc",
    authDomain: "greenloop-aea23.firebaseapp.com",
    projectId: "greenloop-aea23",
    storageBucket: "greenloop-aea23.firebasestorage.app",
    messagingSenderId: "136736555738",
    appId: "1:136736555738:web:db99dae404909fed349be3",
    measurementId: "G-3ZHGZ0NET3"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useStore = create((set) => ({
    productList: [],
    electronicsList: [],
    toysList: [],
    cart: [],

    setProductList: (productList) => set({ productList }),
    setElectronicsList: (electronicsList) => set({ electronicsList }),
    setToysList: (toysList) => set({ toysList }),

    fetchProducts: async () => {
        try {
            // Fetch product list
            const productSnapshot = await getDocs(collection(db, "produktList"));
            const products = productSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Fetch electronics list
            const electronicsSnapshot = await getDocs(collection(db, "electronicsList"));
            const electronics = electronicsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Fetch toys list
            const toysSnapshot = await getDocs(collection(db, "toysList"));
            const toys = toysSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            set({ productList: products, electronicsList: electronics, toysList: toys });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },

    addToCart: (product) => set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] })),

    removeFromCart: (product, quantity = 1) => {
        set((state) => {
            const updatedCart = [...state.cart];
            const index = updatedCart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                if (updatedCart[index].quantity <= quantity) {
                    updatedCart.splice(index, 1);
                } else {
                    updatedCart[index].quantity -= quantity;
                }
            }
            return { cart: updatedCart };
        });
    },
}));

export { useStore };
