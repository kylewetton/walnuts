import React from "react";
import Intro from "./Intro";
import HomeSeries from "./HomeSeries";
import HomeProducts from "./HomeProducts";

const Home = ({ data, products }) => {
  return (
    <React.Fragment>
      <Intro data={data} />
      <HomeSeries />
      <HomeProducts products={products} />
    </React.Fragment>
  );
};

export default Home;
