import React, { Component } from 'react';

import '../assets/css/productSearch.css';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.onSearchProducts = this.onSearchProducts.bind(this);
  }

  onSearchProducts(event) {
    event.preventDefault();
    const searchString = document.getElementById('q').value;
    this.props.searchProducts(searchString);

    return false;
  }

  render() {
    return (
      <div className="nav-search on">
        <a className="icon-search" href="javascript:void(0)">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
                
                  <input
                    type="text"
                    name="q"
                    id="q"
                    onChange={event => this.onSearchProducts(event)}
                    defaultValue=""
                    data-translate="general.search.placeholder"
                    translate-item="placeholder"
                    placeholder="Search Jacket or Jeans"
                    className="input-group-field"
                    aria-label="Search Site"
                    autoComplete="off"
                  />
        
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-search"><i className="fa fa-search" aria-hidden="true"></i></button>
                  </span>

      </div>
    );
  }
}
