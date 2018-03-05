import React, { Component } from 'react';

import '../assets/css/socialButtons.css';

export default class SocialButtons extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <ul className="social-icons">
        <li className="facebook">
          <a href="http://facebook.com/shopify" title="Facebook">
            <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
          </a>
        </li>
        <li className="twitter">
          <a href="http://twitter.com/shopify" title="Twitter">
            <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </a>
        </li>
        <li className="google_plus">
          <a href="http://plus.google.com/+shopify" title="Google+">
            <i className="fa fa-google-plus fa-lg" aria-hidden="true"></i>
          </a>
        </li>
        <li className="instagram">
          <a href="http://instagram.com/shopify" title="Instagram">
            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
          </a>
        </li>
        <li className="pinterest">
          <a href="https://pinterest.com/shopify" title="Pinterest">
            <i className="fa fa-pinterest-p fa-lg" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    );
  }
}
