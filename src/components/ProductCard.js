import React from 'react';
import styled from 'styled-components';

const ProductCard = props => {
    let {title, body, price, id, image} = props.data;
    return (<div>
        <img src={image} alt={title}/>
        {title}<br/>
        {price}
        </div>)
}

export default ProductCard;