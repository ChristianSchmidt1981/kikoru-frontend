import React, { Component } from 'react';
import SocialButtons from '../container/SocialButtons';
import '../assets/css/footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <footer className="footer" role="contentinfo">
  <div className="container">
    <div className="footer-top">
        <div className="row">
          <div className="col-1">
              <h3>Shops</h3>
              <ul>
                  <li><a href="/collections/new-in">New In</a></li>
                  <li><a href="/collections/women">Women</a></li>
                  <li><a href="/collections">Schuhe Shoes</a></li>
                  <li><a href="/collections/bags-accessories-taschen-accessoires">Bags &amp; Accessories</a></li>
                  <li><a href="/collections/men">Men</a></li>
                  <li><a href="/collections/top-brands">Top Brands</a></li>
                  <li><a href="/collections/sale-special-offers">Sale &amp; Special Offers</a></li>
                  <li><a href="/pages/lookbook">Lookbook</a></li>
              </ul>
          </div>

          <div className="col-2">
              <h3>Information</h3>
              <ul>
                  <li><a href="/pages/about-us">About us</a></li>
                  <li><a href="/">Customer Service</a></li>
                  <li><a href="/">New Collection</a></li>
                  <li><a href="/">Best Sellers</a></li>
                  <li><a href="/">Manufacturers</a></li>
                  <li><a href="/">Privacy policy</a></li>
                  <li><a href="/">Terms &amp; condition</a></li>
                  <li><a href="/blogs/news">Blog</a></li>
              </ul>
          </div>

          <div className="col-3">
              <h3>Customer Service</h3>
              <ul>    
                  <li><a href="/">Search Terms</a></li>
                  <li><a href="/">Advanced Search</a></li>
                  <li><a href="/">Orders and Returns</a></li>
                  <li><a href="/pages/contact-us">Contact Us</a></li>
                  <li><a href="/">RSS</a></li>
                  <li><a href="/pages/theme-faqs">Help &amp; FAQs</a></li>
                  <li><a href="/">Consultant</a></li>
                  <li><a href="/pages/contact-us">Store Locations</a></li>
              </ul>
          </div>

          <div className="col-4">
            <div className="footer-social">
              <h3>STAY CONNECTED</h3>

              <SocialButtons />
            </div>
          </div>
        </div>
    </div>
    <div className="footer-bottom">
          
            <address>
              © 2018 kikoru UG. All Rights Reserved.
            </address>
    </div>
    
  </div>
</footer>
    );
  }
}
