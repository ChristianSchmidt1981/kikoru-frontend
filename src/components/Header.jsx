import React, { Component } from 'react';
import ProductSearch from '../container/ProductSearch';

import '../assets/css/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.a = 1;
  }

  render() {
    return (
      <header className="site-header">
        <div className="header-bottom">
          <div className="container">
            <div className="header-mobile">
              <div className="menu-block visible-phone">
                <div id="showLeftPush" className="resized">
                  <i className="fa fa-bars" aria-hidden="true" />
                </div>
              </div>

              <div className="customer-area dropdown">
                <a data-toggle="dropdown" href="#">
                  <i className="fa fa-user" aria-hidden="true" />
                </a>
                <div className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                  <p>
                    <a href="/account" data-translate="customer.account.title">My Account</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="header-panel-top">
              <h1 className="header-logo col-xs-12 col-sm-4">
                  <a href="/">
                    <img className="header-logo" src="//cdn.shopify.com/s/files/1/1825/4753/files/logo_2x_f84350e3-820e-4dcc-8e70-a109f051d378.png?v=1488879055" alt="Ella - Halothemes" itemprop="logo" />
                  </a>
              </h1>
                
              <ProductSearch />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
