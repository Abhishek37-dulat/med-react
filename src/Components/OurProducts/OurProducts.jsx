import React, { useRef } from "react";
import "./OurProducts.css";

import { useState } from "react";
import Product from "../AllProducts/Product";
import { useSelector } from "react-redux";

const OurproductsImage = [
  "https://www.meethomeopharmacy.com/image/product/normal/1781.jpg",
  "https://www.meethomeopharmacy.com/image/product/normal/1272.jpg",
  "https://www.meethomeopharmacy.com/image/product/normal/1561.jpg",
  "https://www.meethomeopharmacy.com/image/product/normal/1776.jpg",
];
const OurproductsName = [
  "Wheezal SCABOIL (60ml)",
  "Wheezal WL-45 Anti Snoring Drops (30ml)",
  " Bhargava Osteo Strong Tablets (25g)",
  "LDD Bioscience Garcinia Slimtab (60tab)",
];

const OurFeaturesproductsImage = [
  "https://www.meethomeopharmacy.com/image/product/normal/1756.jpg",
  "https://www.meethomeopharmacy.com/image/product/normal/1618.jpg",
  "https://www.meethomeopharmacy.com/image/product/normal/1561.jpg",
  "https://www.meethomeopharmacy.com/image/product/normal/1776.jpg",
];

const OurProducts = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const refrection = useRef();
  const refrectionFeatures = useRef();

  const [arrayBox, setArrayBox] = useState(OurproductsImage);
  const handleSeller = () => {
    setArrayBox(OurproductsImage);
    refrection.current.style.backgroundColor = "#16a086";
    refrection.current.style.color = "#fff";
    refrectionFeatures.current.style.color = "#000";
    refrectionFeatures.current.style.backgroundColor = "#fff";
  };
  const handleFeatured = () => {
    setArrayBox(OurFeaturesproductsImage);
    refrection.current.style.backgroundColor = "#fff";
    refrection.current.style.color = "#000";
    refrectionFeatures.current.style.color = "#fff";
    refrectionFeatures.current.style.backgroundColor = "#16a086";
  };
  return (
    <div className="ourproducts">
      <div className="ourproducts-all">
        <div className="ourproducts-1">
          <p>Our Products</p>
          <div>
            <button ref={refrection} onClick={() => handleSeller()}>
              Bestseller
            </button>
            <button
              ref={refrectionFeatures}
              onClick={() => handleFeatured()}
              style={{ backgroundColor: "#fff", color: "#000" }}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="ourproducts-2">
          {arrayBox.map((data, index) => {
            return (
              <Product image={arrayBox[index]} name={OurproductsName[index]} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
