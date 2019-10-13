import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Home } from "./Home";
import StandardPage from "./StandardPage";
import { ProductPage } from "./ProductPage";
import Logo from "./Logo";
import Cart from "./Cart";

var contentful = require("contentful");

var client = contentful.createClient({
  space: "it264c3hy5de",
  accessToken: "TevZpay0vz0xnHNzopNf1oql00W1nex-ItNald-igq8"
});

const Loading = () => {
  return (
    <LoadingContainer>
      <Logo type={"stacked"} compact={"true"} />
    </LoadingContainer>
  );
};

const App = () => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    cart: []
  });

  useEffect(() => {
    client.getEntries().then(entries => {
      let products, pages;
      products = entries.items.filter(val => {
        return val.sys.contentType.sys.id === "product";
      });
      pages = entries.items.filter(val => {
        return val.sys.contentType.sys.id === "pages";
      });
      let data = { products, pages };

      setTimeout(() => {
        setState({ ...state, data, loading: false });
      }, 1000);
    });
  }, []);

  let homeData, productData;
  if (Object.entries(state.data).length > 0) {
    homeData = state.data.pages.filter(
      val => val.sys.id === "1P1SmYlX9MgR2UDbXYvsaR"
    );
    productData = state.data.products;
  }

  const onAddToCart = id => {
    let cart = state.cart;
    if (!cart.includes(id)) {
      cart.push(id);
    }
    setState({ ...state, cart });
  };

  const onDeleteFromCart = id => {
    let cart = state.cart;
    cart = cart.filter(val => val !== id);
    setState({ ...state, cart });
  };

  return (
    <React.Fragment>
      <Router>
        {state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <Header />
            <Switch>
              <Route
                path="/products/:id"
                render={props => (
                  <ProductPage
                    {...props}
                    onAddToCart={onAddToCart}
                    products={productData}
                  />
                )}
              />
              <Route path="/:page" component={StandardPage} />
              <Route path="/">
                <Home data={homeData[0]} products={productData} />
              </Route>
            </Switch>
            <Cart
              products={state.data.products}
              items={state.cart}
              onDeleteItem={onDeleteFromCart}
            />
            <Footer />
          </React.Fragment>
        )}
      </Router>
    </React.Fragment>
  );
};

const LoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
