import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./Products/Products";
import { useState, useEffect } from "react";
import { commerce } from "./Lib/com";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const handleCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar totalItems={cart.total_items} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Products products={products} onAddToCart={handleCart} />}
          />

          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleEmptyCart={handleEmptyCart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
