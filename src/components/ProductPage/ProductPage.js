import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ProductContainer } from "./styles";
import Button from "../Button";

const ProductPage = ({ match, products, onAddToCart }) => {
  let product = products.filter(val => val.fields.id === match.params.id);
  let { name, description, price, image, id } = product[0].fields;
  description = documentToHtmlString(description);

  const handleAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <div className="container">
      <ProductContainer>
        <div className="col-1 image-column">
          <img
            className="product-image"
            alt={image.fields.title}
            src={image.fields.file.url}
          />
          <img
            className="blob"
            alt={"blob"}
            src={
              window.location.origin +
              `/assets/blob-${Math.floor(Math.random() * 4 + 1)}.svg`
            }
          />
        </div>
        <div className="col-2">
          <h1>{name}</h1>
          <h4>${price}</h4>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <Button onClick={handleAddToCart} text={"Add to cart"} />
        </div>
      </ProductContainer>
    </div>
  );
};

export default ProductPage;
