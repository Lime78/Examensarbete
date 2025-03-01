import { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../Style/LandingPage.css';
import { useStore } from '../Data/store.js';
import '../Style/products.css';

import Logo_Vit from '../assets/Logo_Vit.svg';

function Products() {
    const { productList, electronicsList, toysList, fetchProducts, addToCart } = useStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            await fetchProducts();
            setLoading(false);
        };
        loadProducts();
    }, [fetchProducts]);

    return (
      <>
        {/* Header Section */}
        <header>
          <img src={Logo_Vit} alt="Logo" className="h-10" />
          <div className="menu">
            <NavLink to="/"><h1>Home</h1></NavLink>
            <NavLink to="/OmOss"><h1>Om Oss</h1></NavLink>
            <NavLink to="/Contact"><h1>Kontakt</h1></NavLink>
            <NavLink to="/Produkter"><h1>Produkter</h1></NavLink>
          </div>
        </header>

        {/* Product Display Section */}
        <div className="products-container">
            <h2>Products</h2>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <>
                    {/* General Products */}
                    <h3>General Products</h3>
                    <div className="product-list">
                        {productList.length > 0 ? productList.map((product) => (
                            <div key={product.id} className="product-card">
                                <h4>{product.Name}</h4>
                                <img src={product.image} alt={product.Name} width="100" />
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        )) : <p>No general products available.</p>}
                    </div>

                    {/* Electronics Products */}
                    <h3>Electronics</h3>
                    <div className="product-list">
                        {electronicsList.length > 0 ? electronicsList.map((electronic) => (
                            <div key={electronic.id} className="product-card">
                                <h4>{electronic.name}</h4>
                                <img src={electronic.image} alt={electronic.name} width="100" />
                                <button onClick={() => addToCart(electronic)}>Add to Cart</button>
                            </div>
                        )) : <p>No electronics available.</p>}
                    </div>

                    {/* Toys Products */}
                    <h3>Toys</h3>
                    <div className="product-list">
                        {toysList.length > 0 ? toysList.map((toy) => (
                            <div key={toy.id} className
                            ="product-card">
                                <h4>{toy.name}</h4>
                                <img src={toy.image} alt={toy.name} width="100" />
                                <button onClick={() => addToCart(toy)}>Add to Cart</button>
                            </div>
                        )) : <p>No toys available.</p>}
                    </div>
                </>
            )}
        </div>
      </>
    );
}

export default Products;
