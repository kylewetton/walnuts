import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const ProductMeta = props => {
    return (
        
      
        <ProductMetaContainer>
            <h3 className="title">{props.data.title} </h3>
           <h3 className="title pad">|</h3>  
            <span className="price">${props.data.price}</span>
        </ProductMetaContainer>  
        
    )
}

const ProductCard = props => {
    let {title, body, price, id, image} = props.data;
    return (
       
    <ProductCardWrapper>
         <Link to={'/products/' + id}>
                <img src={image} alt={title}/>
                <ProductMeta data={{title, price}} />
            </Link>  
            <Blob alt={'blob'} src={props.blob} />
        </ProductCardWrapper>   
        )
}

const ProductMetaContainer = styled.div`
position: absolute;
bottom: 6em;
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
`

const Blob = styled.img`
    position: absolute;
    top: 0; 
    z-index: -1;
`

export default ProductCard;