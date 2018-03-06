import React, { Component } from 'react';
import Footer from '../container/Footer';
import Header from '../container/Header';
import Navigation from '../container/Navigation';
import Filter from '../container/Filter';
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
            <div className="left">
              <Navigation />
              <Filter />
            </div>
            <ProductList />
          </div>
          <Footer />
        </div>
    );
  }
}
