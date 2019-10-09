import React from 'react';
import {data} from '../../data';


const ProductPage = props => {
let product = data.products.filter(val => val.id === props.match.params.id);
let {title, body, price, id} = product[0];

    return (
        <div className="container">
            <h1>{title}</h1>
            {body}
        </div>
    );
};

export default ProductPage;