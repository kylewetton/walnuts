import React from "react";
import Intro from "./Intro";
import HomeProducts from "./HomeProducts";

const Home = ({ data, products }) => {
  return (
    <React.Fragment>
      <Intro data={data} />
      <HomeProducts products={products} />
    </React.Fragment>
  );
};

export default Home;
