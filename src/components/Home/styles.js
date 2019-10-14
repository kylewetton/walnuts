import styled from "styled-components";

export const BlobSvg = styled.svg`
  z-index: -1;
  width: 120%;
  transform: translateX(10%);
  position: absolute;

  @media (max-width: 640px) {
    width: 80%;
    transform: translateX(0);
  }
`;

export const IntroContainer = styled.section`
  position: relative;
  max-width: 100%;
  height: 100vh;
  display: flex;
  > div {
    flex: 1;
  }
  .intro-product,
  .intro-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .intro-product {
    > img {
      transform: translateY(15%);
    }
  }
  .intro-content {
    padding-left: 10em;
    max-width: 50%;
    flex-direction: column;
    align-items: flex-start;
    > p {
      padding-right: 10em;
    }
  }

  @media (max-width: 760px) {
    height: auto;
    padding-bottom: 2em;
    .intro-content {
      padding-left: 4em;
    }
    .intro-product {
      margin-top: 100px;
      > img {
        height: 300px;
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    .intro-content,
    .intro-product {
      max-width: 100%;
      text-align: center;
    }
    .intro-content {
      order: 2;
      flex: 2;
      padding: 0 2em;
      align-items: center;
    }
  }
`;

export const HomeSeriesContainer = styled.div`
  background: radial-gradient(
    circle at 100%,
    rgba(211, 183, 132, 1) 32%,
    rgba(165, 140, 95, 1) 100%
  );
  padding: 7em;
  display: flex;
  * {
    color: white;
  }
  > div {
    flex: 1;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const HomeProductsTitle = styled.div`
  text-align: center;
  padding: 4em;
  padding-top: 0;
  h2 {
    margin: 0;
  }
  @media (max-width: 820px) {
    padding-bottom: 0;
  }
`;
export const HomeProductsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 4em;
  margin: 0 auto;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
