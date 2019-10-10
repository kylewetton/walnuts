import React from 'react';
import ProductCard from '../ProductCard';
import { HomeProductsTitle, HomeProductsContainer } from './styles'

const HomeProducts = props => {
    let products = props.products.map((val, i) => {
        return <ProductCard key={i} blob={`./assets/blob-${i + 2}.svg`} data={val} /> 
    });

    return (
     <React.Fragment>
        <HomeProductsTitle>
        <h2>Choose the Walnut thats right for you.</h2>
      </HomeProductsTitle>
      <HomeProductsContainer>
        {products}
      </HomeProductsContainer>
     </React.Fragment>
    );
}

export default HomeProducts;
