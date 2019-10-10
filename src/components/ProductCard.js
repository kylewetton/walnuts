import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const ProductMeta = props => {
    return (   
        <ProductMetaContainer>
            <h3 className="title">{props.data.name} </h3>
           <h3 className="title pad">|</h3>  
            <span className="price">${props.data.price}</span>
        </ProductMetaContainer>  
    )
}

const ProductCard = props => {
    let {name, content, price, id, image} = props.data.fields;
    return (
       
    <ProductCardWrapper>
         <Link to={'/products/' + id}>
                <img className="product-image" src={image.fields.file.url} alt={image.fields.file.title}/>
                <ProductMeta data={{name, price}} />
            </Link>  
            <Blob alt={'blob'} src={props.blob} />
        </ProductCardWrapper>   
        )
}


const ProductMetaContainer = styled.div`
position: absolute;
bottom: 4em;
display: flex;
    align-items: center;
.title {
    margin: 0;
    font-size: 1.25em;
}
.title.pad {
    margin: 0 0.5em;
}
.price {
    font-weight: bold;
}
.link {
    display: block;
}
`

const ProductCardWrapper = styled.div`
    position: relative;
    flex: 1;
    padding: 4em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .product-image {
        max-width: 190px;
    }
    @media (max-width: 1230px) {
     .product-image {
         max-width: 150px;
     }
    }
    @media (max-width: 820px) {
        padding: 4em;
        .product-image {
            max-width: 190px;
        };
    }
`

const Blob = styled.img`
    position: absolute;
    top: 0; 
    z-index: -1;
    transition: 0.25s ease-out;
    @media (max-width: 1230px) {
        width: 100%;
    }
    @media (max-width: 820px) {
        width: auto;
        height: 100%;
    }
`

export default ProductCard;