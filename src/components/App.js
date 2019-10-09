import React from 'react';
import '../App.css';
import Header from './Header.js';
import Home from './Home/Home';
import StandardPage from './StandardPage';
import ProductPage from './ProductPage/ProductPage.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {data} from '../data';
var contentful = require('contentful');

var client = contentful.createClient({
  space: 'it264c3hy5de',
  accessToken: 'TevZpay0vz0xnHNzopNf1oql00W1nex-ItNald-igq8'
})

const Loading = () => {
  return <p>LOADING...</p>
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
      this.setState({data, loading: false});
    });

    
  }

 render() {
   
   let homeData = data.pages.filter(val => val.page === 'home');
   let productData = data.products;

    return (
      <React.Fragment>
        <Router>
        <Header /> 
        {
          this.state.loading ?
          <Loading /> : 
          <Switch>
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/:page" component={StandardPage} />
          <Route path="/">
          <Home data={homeData[0]} products={productData} />
          </Route>
          </Switch>
      }

        </Router>
  </React.Fragment>
    );
  }
 } 
 
export default App;
