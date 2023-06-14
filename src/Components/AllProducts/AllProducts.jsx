import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import OurProducts from "../OurProducts/OurProducts";
import Product from "./Product";
import AProducts from "./AProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../reducer/actions/productActions";
import { addToCart } from "../../reducer/actions/cartAction";

const AllProducts = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const addItemToCart = (data) => {
    dispatch(addToCart(data.id, 1));
  };
  console.log(products);
  return (
    <div className="allproducts">
      {products?.map((data, index) => {
        return (
          <AProducts
            image={data.url}
            name={data.title}
            data={data}
            addItemToCart={addItemToCart}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
