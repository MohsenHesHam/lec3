import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      <p>Browse our products below:</p>

      
      <nav >
        <Link to="" >All Products</Link>
        <Link to="mens" >Mens</Link>
        <Link to="womens">Womens</Link>
      </nav>

      
      <Outlet />
    </div>
  );
}
