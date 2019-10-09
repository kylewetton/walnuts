import React from 'react';
import ProductCard from '../ProductCard';
import styled from 'styled-components';

const HomeProducts = props => {
    let products = props.data.map((val, i) => {
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

const HomeProductsTitle = styled.div`
  text-align: center;
  padding: 4em;
  h2 {
    margin: 0;
  }
`
const HomeProductsContainer = styled.div`
  display: flex
`

export default HomeProducts;