import React from 'react';
import ProductCard from '../ProductCard';
import styled from 'styled-components';

const HomeProducts = props => {
    let products = props.data.map((val, i) => {
        return <ProductCard key={i} data={val} /> 
    });

    return (
      <HomeProductsContainer>
        {products}
      </HomeProductsContainer>
    );
}

const HomeProductsContainer = styled.div`

`

export default HomeProducts;