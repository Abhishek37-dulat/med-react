import React from "react";
import Slides from "../Components/Slides/Slides";
import Categories from "../Components/Categories/Categories";
import Brands from "../Components/Brands/Brands";
import OurProducts from "../Components/OurProducts/OurProducts";

const Home = () => {
  return (
    <div className="home">
      <Slides />
      <Categories />
      <Brands />
      <OurProducts />
    </div>
  );
};

export default Home;
