import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from "./screens/Signup.jsx";
import { CartProvider } from "./components/contextReducer.jsx";
import Cart from "./screens/Cart.jsx";
import MyOrder from "./screens/MyOrder.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
