import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';

function App() {
  const products = [
    {
      id: 1,
      name: "Halo Zip Up - Black",
      price: 135,
      image: "https://placehold.co/600x600/1a1a1a/ffffff?text=Halo+Black",
      description: "Oversized heavyweight French terry with vintage acid wash and YKK brass hardware."
    },
    {
      id: 2,
      name: "Halo Zip Up - Brown",
      price: 135,
      image: "https://placehold.co/600x600/8b5a3c/ffffff?text=Halo+Brown",
      description: "Boxy silhouette with distressing and reverse stitching. Torn by grace."
    },
    {
      id: 3,
      name: "Halo Zip Up - Magenta",
      price: 135,
      image: "https://placehold.co/600x600/a3226e/ffffff?text=Halo+Magenta",
      description: "Structure paired with distress in a bold magenta wash."
    },
    {
      id: 4,
      name: "Halo Zip Up - Blue",
      price: 135,
      image: "https://placehold.co/600x600/3b4fd6/ffffff?text=Halo+Blue",
      description: "Vintage blue acid wash with raw, refined detailing."
    },
    {
      id: 5,
      name: "Halo Zip Up - Green",
      price: 135,
      image: "https://placehold.co/600x600/2fa84f/ffffff?text=Halo+Green",
      description: "Heavyweight terry in a washed green colorway with ring hardware."
    },
    {
      id: 6,
      name: "Saints Logo Tee",
      price: 45,
      image: "https://placehold.co/600x600/0a0a0a/ffffff?text=Logo+Tee",
      description: "Premium cotton tee with the circle DS logo on the chest."
    }
  ];

  // Step 7: load the cart from localStorage when the app starts
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Step 7: save the cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // cartId lets you add the same item twice and still remove just one
  const addToCart = (product) => {
    const cartItem = { ...product, cartId: Date.now() };
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  return (
    // Step 5: wrap everything in BrowserRouter
    <BrowserRouter>
      <div className="app">
        <Header storeName="Different Saints" cartCount={cart.length} />

        <main className="main-content">
          {/* Step 5: Routes go between Header and Footer */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<ProductsPage products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products/:id"
              element={<ProductDetailsPage products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </main>

        <Footer
          storeName="Different Saints"
          email="support@differentsaints.com"
          year={2026}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;