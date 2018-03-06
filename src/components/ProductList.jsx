import React, { Component } from 'react';

import '../assets/css/productList.css';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {

    if (this.props.productGroup === undefined) {
      return (
        <div id="shopify-section-collection-header" className="shopify-section">
          .
        </div>
      );
    }
    console.log( this.props.products);
    this.a = 'a';
    return (
      <div className="col-main">
        <div id="shopify-section-collection-header" className="shopify-section">
          <header className="page-header">
            <div className="img_cart">
              <img src={this.props.productGroup.image} alt={this.props.productGroup.name} />
            </div>
            <h2>{this.props.productGroup.name}</h2>
            <div className="collection-des">
              {this.props.productGroup.description}
            </div>
          </header>
        </div>

        <ul className="product-list">
          {
            this.props.products.map(product => (
              <li className="product">
                <a href={product.link} className="product-grid-image">
                  <img className="productImage" src={product.image} alt={product.description} />
                  <br />
                  <span className="price-min">{product.price.min}</span>
                  <span className="price-max">{product.price.max}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
