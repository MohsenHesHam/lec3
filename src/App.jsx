import React from "react";
import { Routes, Route, Link } from "react-router-dom";
   import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";  
 import AllProducts from "./pages/Shop/AllProducts";
 import Mens from "./pages/Shop/Mens";
  import Womens from "./pages/Shop/Womens";


export default function App() {
  return (
    <div>
      
      <nav >
        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>    
        <Link to="/shop">Shop</Link>
      </nav>

     
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />}>



          <Route index element={<AllProducts />} />  
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
