import React, { Component } from 'react';

import '../assets/css/productSearch.css';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div className="nav-search on">
        <a className="icon-search" href="javascript:void(0)">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
                <form action="/search" method="get" className="input-group search-bar" role="search">
                  <input type="text" name="q" defaultValue="" data-translate="general.search.placeholder" translate-item="placeholder" placeholder="search" className="input-group-field" aria-label="Search Site" autoComplete="off" />
        
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-search"><i className="fa fa-search" aria-hidden="true"></i></button>
                  </span>
                  <ul className="search-results">
                  </ul>
                </form>
      </div>
    );
  }
}
