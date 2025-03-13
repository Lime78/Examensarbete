import { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
// import '../Style/LandingPage.css';
import { useStore } from '../Data/store.js';
import '../Style/products.css';
import { auth } from '../Data/Firebase.js';
import Logo_Vit from '../assets/Logo_Vit.svg';
import SendMessage from './SendMessage.jsx';

function Products() {
    const { productList, electronicsList, toysList, fetchProducts } = useStore();
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeCategory, setActiveCategory] = useState('general'); 

    useEffect(() => {
        const loadProducts = async () => {
            await fetchProducts();
            setLoading(false);
        };
        loadProducts();
    }, [fetchProducts]);

    const handleSendMessage = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseMessage = () => {
        setSelectedProduct(null);
    };

    const renderProductList = () => {
        let listToRender = [];
        let categoryName = '';

        switch (activeCategory) {
            case 'general':
                listToRender = productList;
                categoryName = 'Möbler';
                break;
            case 'electronics':
                listToRender = electronicsList;
                categoryName = 'Elektronik';
                break;
            case 'toys':
                listToRender = toysList;
                categoryName = 'Leksaker';
                break;
            default:
                listToRender = productList;
                categoryName = 'Möbler';
        }

        return (
            <>
                <h3>{categoryName}</h3>
                <div className="product-list">
                    {listToRender.length > 0 ? (
                        listToRender.map((item) => (
                            <div key={item.id} className="product-card">
                                <img src={item.image} alt={item.name || item.Name} />
                                <h4>{item.name || item.Name}</h4>
                                <p className="product-description">{item.description || 'Ingen beskrivning tillgänglig'}</p>
                                {item.price && <p className="product-price">{item.price} kr</p>}
                                <button
                                    className="product_button"
                                    onClick={() => handleSendMessage(item)}
                                >
                                    Kontakta säljare
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No {categoryName.toLowerCase()} available.</p>
                    )}
                </div>
            </>
        );
    };

    return (
        <>
            <header>
                <img src={Logo_Vit} alt="Logotyp" className="logo" />
                <div className="menu">
                  <NavLink to="/"><h1>Hem</h1></NavLink>
                  <NavLink to="/OmOss"><h1>Om Oss</h1></NavLink>
                  <NavLink to="/Contact"><h1>Kontakt</h1></NavLink>
                  <NavLink to="/Produkter"><h1>Produkter</h1></NavLink>
                  <NavLink to="/profile"><h1>Profil</h1></NavLink>
                  <NavLink to="/channels"><h1>Meddelanden</h1></NavLink>
                </div>
            </header>

            <div className="products-container">
                <h2>Products</h2>
                <div className="category-tabs">
                    <button
                        className={`tab-button ${activeCategory === 'general' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('general')}
                    >
                        Möbler
                    </button>
                    <button
                        className={`tab-button ${activeCategory === 'electronics' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('electronics')}
                    >
                        Elektronik
                    </button>
                    <button
                        className={`tab-button ${activeCategory === 'toys' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('toys')}
                    >
                        Leksaker
                    </button>
                </div>

                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    renderProductList()
                )}
            </div>

            {selectedProduct && (
                <SendMessage
                    recipientId={selectedProduct.createdBy}
                    recipientName={selectedProduct.createdBy}
                    onClose={handleCloseMessage}
                />
            )}
        </>
    );
}

export default Products;