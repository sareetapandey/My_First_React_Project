import React from "react";
import HotProducts from "./HotProducts";
import TrendingVendors from "./TrendingVendors";
import AuthLayout from "../../layout/AuthLayout";
import CarouselComponent from "../carousel/CarouselComponent";
import Categories from "../categories";

const DashBoard = () => {
  return (
    <div>
      <Categories />
      <CarouselComponent />
      <HotProducts />
      <TrendingVendors />
    </div>
  );
};

export default DashBoard;
