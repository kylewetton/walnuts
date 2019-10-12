import React from "react";
import { HomeSeriesContainer } from "./styles";

const HomeSeries = () => {
  return (
    <HomeSeriesContainer>
      <div>
        <h2>Introducing the Walnut Series</h2>
        <h3>Packed with everything your body needs.</h3>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
        <strong>Starting at $249.99</strong>
      </div>
      <div>
        <img alt="The Walnut Series" src={"./assets/series.png"} />
      </div>
    </HomeSeriesContainer>
  );
};

export default HomeSeries;
