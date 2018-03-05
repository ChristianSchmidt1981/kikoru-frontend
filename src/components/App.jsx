import React, { Component } from 'react';
import Footer from '../container/Footer';
import Header from '../container/Header';
import Navigation from '../container/Navigation';
import ProductList from '../container/ProductList';
import '../assets/css/main.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
        <div>
          <Header />
          <div>
            <Navigation />
            <ProductList />
          </div>
          <Footer />
        </div>
    );
  }
}
