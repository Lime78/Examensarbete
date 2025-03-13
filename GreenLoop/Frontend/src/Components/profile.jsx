import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, getDocs, addDoc, doc, deleteDoc, query, where } from 'firebase/firestore';
import { auth, db } from '../Data/Firebase.js';
import { useStore } from '../Data/store.js'; 
import '../Style/profile.css';
import Logo_Svart from '../assets/Logo_Svart.svg';

const Profile = () => {
    const { fetchMessages, messages } = useStore(); 
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newImage, setNewImage] = useState("");
    const [collectionName, setCollectionName] = useState("");
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            await getUserProfile();
            const userId = auth.currentUser?.uid;
            if (userId) {
                await fetchMessages(userId);
            }
        };
        loadData();
    }, [fetchMessages]);

    useEffect(() => {
        if (username) {
            getAllStoreLists();
        }
    }, [username]);

    const getUserProfile = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const q = query(collection(db, "users"), where("email", "==", user.email));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();
                    setUsername(userData.username || "");
                }
            }
        } catch (err) {
            setError("Kunde inte hämta användarprofil: " + err.message);
        }
    };

    const getAllStoreLists = async () => {
        try {
            const collectionsToCheck = ['storeList', 'electronicsList', 'toysList', 'produktList'];
            let allProducts = [];

            for (const collectionName of collectionsToCheck) {
                const collectionRef = collection(db, collectionName);
                const data = await getDocs(collectionRef);
                const productsList = data.docs.map(doc => ({ ...doc.data(), id: doc.id, collectionName }));
                allProducts = [...allProducts, ...productsList];
            }

            // Filter products where createdBy matches the logged-in user's username
            const userProducts = allProducts.filter(product => product.createdBy === username);
            setProducts(userProducts);
        } catch (err) {
            setError("Kunde inte hämta produkter: " + err.message);
        }
    };

    const handleLogout = () => {
        auth.signOut();
    };

    const onSubmitStore = async () => {
        if (!newName.trim() || !newDescription.trim() || !newImage.trim() || !collectionName.trim()) {
            setError("Alla fält är obligatoriska.");
            return;
        }

        setError("");
        try {
            const storeListCollectionRef = collection(db, collectionName);
            await addDoc(storeListCollectionRef, {
                name: newName,
                description: newDescription,
                image: newImage,
                createdBy: username,
                createdAt: new Date().toISOString(),
                collectionName
            });
            getAllStoreLists();
            setNewName("");
            setNewDescription("");
            setNewImage("");
            setCollectionName("");
        } catch (err) {
            setError("Kunde inte lägga till produkt: " + err.message);
        }
    };

    const deleteProduct = async (id, collectionName) => {
        try {
            const productRef = doc(db, collectionName, id);
            await deleteDoc(productRef);
            getAllStoreLists();
        } catch (err) {
            setError("Kunde inte ta bort produkt: " + err.message);
        }
    };

    return (
        <div className="profile-page">
            <header className="profile-header">
                <img src={Logo_Svart} alt="Profile Logo" className="profile-logo" />
                <h1>Välkommen, <span>{username || "Gäst"}</span>!</h1>
                <button className="logut" onClick={handleLogout}>Logga ut</button>
            </header>

            <section className="add-product-section">
                <h2>Lägg till ny produkt</h2>
                {error && <p className="error">{error}</p>}
                <form className="product-form" onSubmit={(e) => { e.preventDefault(); onSubmitStore(); }}>
                    <input 
                        placeholder="Produktnamn" 
                        value={newName} 
                        onChange={(e) => setNewName(e.target.value)} 
                    />
                    <textarea 
                        placeholder="Beskrivning" 
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        rows="3"
                    />
                    <input 
                        placeholder="Bild URL" 
                        value={newImage} 
                        onChange={(e) => setNewImage(e.target.value)}
                    />
                    <input 
                        placeholder="Samlingens namn" 
                        value={collectionName} 
                        onChange={(e) => setCollectionName(e.target.value)}
                    />
                    <button type="submit">Lägg till</button>
                </form>
            </section>

            <section className="my-products">
                <h2>Mina produkter</h2>
                {products.length === 0 ? (
                    <p className="no-products">Du har inte lagt till några produkter ännu.</p>
                ) : (
                    <div className="products-grid">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <button 
                                    className="delete-btn" 
                                    onClick={() => deleteProduct(product.id, product.collectionName)}
                                >
                                    Ta bort
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section className="messages-section">
                <h2>Meddelanden</h2>
                {messages.length === 0 ? (
                    <p className="no-messages">Inga meddelanden ännu.</p>
                ) : (
                    <div className="messages-list">
                        {messages.map(message => (
                            <div key={message.id} className="message">
                                <p>{message.message} (Från: {message.senderId})</p>
                                <span>{message.sentAt.split('T')[0]}</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Profile;