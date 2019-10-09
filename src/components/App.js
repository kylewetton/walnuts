import React from 'react';
import '../App.css';
import Header from './Header.js';
import Home from './Home/Home';
import StandardPage from './StandardPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {data} from '../data';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.setState({data})
  }

 render() {
   let homeData = data.pages.filter(val => val.page === 'home');
   let productData = data.products;
  return (
    <React.Fragment>
      <Router>
      <Header />
          <Switch>
          <Route path="/:page" component={StandardPage}>
          </Route>
          <Route path="/">
          <Home data={homeData[0]} products={productData} />
          </Route>

          </Switch>
      </Router>
</React.Fragment>
  );
 } 
 
}

export default App;
