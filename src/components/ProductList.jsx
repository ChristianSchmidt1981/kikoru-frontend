import React, { Component } from 'react';

import '../assets/css/productList.css';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    this.a = 'a';
    return (
      <div className="col-main">
        <div id="shopify-section-collection-header" className="shopify-section">
          <header className="page-header">
            <div className="img_cart">
              <img src="//cdn.shopify.com/s/files/1/1825/4753/files/img_cat_022eb85c-e4c3-466c-a638-1b67c31d6bc8.jpg?v=1490539957" alt="Men" />
            </div>
            <h2>Men</h2>
            <div className="collection-des">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla nulla, nec tincidunt risus morbi ultricies est ditae odio ultrices imperdiet. Cras accumsan dorci maces consequat blandi susto dusto elementum libero non honcus purus sem sit amet enim
            </div>
          </header>
        </div>

        <ul>
          <li className="product">
            <a href="/collections/men/products/cras-in-nunc-non-ipsum-duo-cursus-ultrices" className="product-grid-image">
              <img src="//cdn.shopify.com/s/files/1/1825/4753/products/03_ce982bf6-365f-4ad6-8636-208b6b5416fa_large.jpg?v=1488852960" alt="Cras in nunc non ipsum duo cursus ultrices est" />
              <div className="hover"></div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
