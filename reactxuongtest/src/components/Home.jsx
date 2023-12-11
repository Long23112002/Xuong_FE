import React from "react";
import NavBar from "./NavBar";
import Product from "./Product";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#e7e4e4" }}>
      <h1>Product</h1>
      <NavBar />
      <Product />
    </div>
  );
};
export default Home;
