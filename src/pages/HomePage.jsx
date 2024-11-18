import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import product1 from "../images/pone.jpg";
import product2 from "../images/ptwo.jpg";
import product3 from "../images/pthree.jpg";

const HomePage = () => {
  const products = [
    { id: 1, image: product1, name: "Product 1", price: 1200 },
    { id: 2, image: product2, name: "Product 2", price: 1800 },
    { id: 3, image: product3, name: "Product 3", price: 2500 },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <Carousel />
      <div className="flex-1 px-4 py-8 mt-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
