import React from 'react';
import {data} from '../../data';
import styled from 'styled-components';

const ProductPage = props => {
let product = data.products.filter(val => val.id === props.match.params.id);
let {title, body, price, image} = product[0];

    return (
        <div className="container">
    
            <ProductContainer>
                <div className="col-1 image-column">
                    <img className="product-image" alt={title} src={window.location.origin + image} />
                    <img className="blob" alt={'blob'} src={window.location.origin + `/assets/blob-${Math.floor((Math.random() * 4) + 1)}.svg`} />
                </div>
                <div className="col-2">
                <h1>{title}</h1>
                    <h2>${price}</h2>
                    {body}
                </div>
            </ProductContainer>
        </div>
    );
};

const ProductContainer = styled.div`
display: flex;
> div {
    flex: 1;
}
.image-column {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
     .blob {
        width: 100%;
        position: absolute;
        z-index: -1;
    }
    .product-image {
        height: 120%;
    }
}
`

export default ProductPage;