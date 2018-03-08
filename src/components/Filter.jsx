import React, { Component } from 'react';
import '../assets/css/filter.css';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeProductGroup(event, id) {
    event.preventDefault();
    this.props.changeFilter(id);
  }

  changeFilter(event, filterGroup, filter) {
    event.preventDefault();
    this.props.changeFilter(filterGroup, filter);
  }

  getFilterBrand() {
    const brandList = [ ...new Set(
      this.props.products.map(product => product.brand)
    )];
    return (
      <div className="widget sidebar-links">
        <div className="widget-title">
          <h3>Filter-Brand</h3>
        </div>
        <div className="widget-content">
          <ul className="filter-brand">
            {
              brandList.map((brandName, idx) => {
                const id = `brand${brandName}`;
                let selected = {};
                if (this.props.currentFilter.brand.includes(brandName)) {
                  selected = { checked: 'checked' };
                }
                return (
                  <li key={idx} className="single-filter">
                    <input
                      type="checkbox"
                      id={id}
                      value={brandName}
                      {...selected}
                      onClick={event => this.changeFilter(event, 'brand', brandName) }
                    />
                    {brandName}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  getFilterSize() {
    return (
      <div className="widget sidebar-links">
        <div className="widget-title">
          <h3>Filter-Size</h3>
        </div>
        <div className="widget-content">
          <ul className="filter-size">
            {
              this.props.filter.size.map((filterSize, idx) => {
                const id = `size${filterSize}`;
                let selected = {};
                if (this.props.currentFilter.size.includes(filterSize)) {
                  selected = { checked: 'checked' };
                } 
                return (
                  <li key={idx} className="single-filter">
                    <input
                      type="checkbox"
                      id={id}
                      value={filterSize}
                      {...selected}
                      onClick={event => this.changeFilter(event, 'size', filterSize) }
                    />
                    {filterSize}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          this.getFilterSize()
        }
        {
          this.getFilterBrand()
        }
      </div>
    );
  }
}
