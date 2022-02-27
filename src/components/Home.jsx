import React from "react";
import CategoriesLarge from "./categories/CategoriesLarge";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import ProductContainer from "./ProductContainer";
import ProductList from "./products/ProductList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductContainer />
      <CategoriesLarge />
      <ProductList />
      <Footer />
    </>
  );
}
