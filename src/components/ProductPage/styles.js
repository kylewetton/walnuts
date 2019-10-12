import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  min-height: 33vh;
  > div {
    flex: 1;
    padding: 2em;
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
      height: auto;
      max-width: 250px;
    }
  }
  @media (max-width: 748px) {
    flex-direction: column;
    text-align: center;
    .product-image {
      max-width: 180px;
    }
    .col-1 {
      padding: 0 2em;
    }
    .col-2 {
      padding-top: 0;
    }
    .image-column {
      .blob {
        width: 100%;
        height: auto;
      }
    }
  }
`;
