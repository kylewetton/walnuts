import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ProductContainer } from './styles';

const ProductPage = props => {
console.log(props.products);
let product = props.products.filter(val => val.fields.id === props.match.params.id);
let {name, description, price, image} = product[0].fields;
description = documentToHtmlString(description);

    return (
        <div className="container">
    
            <ProductContainer>
                <div className="col-1 image-column">
                    <img className="product-image" alt={image.fields.title} src={image.fields.file.url} />
                    <img className="blob" alt={'blob'} src={window.location.origin + `/assets/blob-${Math.floor((Math.random() * 4) + 1)}.svg`} />
                </div>
                <div className="col-2">
                <h1>{name}</h1>
                    <h2>${price}</h2>
                    <div dangerouslySetInnerHTML={ { __html: description }} />
                </div>
            </ProductContainer>
        </div>
    );
};

export default ProductPage;