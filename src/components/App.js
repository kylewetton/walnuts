import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import '../App.css';
import Header from './Header.js';
import Home from './Home/Home';
import StandardPage from './StandardPage';
import ProductPage from './ProductPage/ProductPage.js';
import Logo from './Logo';
import {data} from '../data';

var contentful = require('contentful');

var client = contentful.createClient({
  space: 'it264c3hy5de',
  accessToken: 'TevZpay0vz0xnHNzopNf1oql00W1nex-ItNald-igq8'
})

const Loading = () => {
  return (
  <LoadingContainer>
    <Logo />
  </LoadingContainer>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true
    }
  }

  componentDidMount() {
   // Load the data from Contentful
    client.getEntries()
    .then(entries => {
      let products, pages;
      products = entries.items.filter(val => {
        return val.sys.contentType.sys.id === 'product';
      });
      pages = entries.items.filter(val => {
        return val.sys.contentType.sys.id === 'pages';
      });
      let data = {products, pages};
      // Delay loading slightly to stop flickering of loading
      
      setTimeout(() => {
        this.setState({data, loading: false});
      }, 1000);
    });

    
  }

 render() {
   let homeData, productData;
   if (Object.entries(this.state.data).length > 0) {
      homeData = this.state.data.pages.filter(val => val.sys.id === '1P1SmYlX9MgR2UDbXYvsaR');
      productData = this.state.data.products;
    }
   
    
    return (
      <React.Fragment>
        <Router>
        
        {
          this.state.loading ?
          <Loading /> : 
          <React.Fragment>
          <Header /> 
          <Switch>
          <Route path="/products/:id" render={props => <ProductPage {...props} products={productData}/>} />
          <Route path="/:page" component={StandardPage} />
          <Route path="/">
          <Home data={homeData[0]} products={productData} />
          </Route>
          </Switch>
          </React.Fragment>
      }
        </Router>
  </React.Fragment>
    );
  }
 } 

 const LoadingContainer = styled.div`
 position: fixed;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 `
 
export default App;
