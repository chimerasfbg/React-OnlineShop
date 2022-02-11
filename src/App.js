import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./Products/Products";
import { useState, useEffect } from "react";
import { commerce } from "./Lib/com";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
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

          <Route exact path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
