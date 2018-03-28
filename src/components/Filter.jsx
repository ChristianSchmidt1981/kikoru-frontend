import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import '../assets/css/filter.css';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.changeFilter = this.changeFilter.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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
                  selected = { defaultChecked: 'checked' };
                }
                return (
                  <li key={idx} className="single-filter">
                    <label ref={id}>
                      <input
                        type="checkbox"
                        id={id}
                        value={brandName}
                        {...selected}
                        onChange={event => this.changeFilter(event, 'brand', brandName) }
                      />
                      {brandName}
                    </label>
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
                  selected = { defaultChecked: 'checked' };
                } 
                return (
                  <li key={idx} className="single-filter">
                    <input
                      type="checkbox"
                      id={id}
                      value={filterSize}
                      {...selected}
                      onChange={event => this.changeFilter(event, 'size', filterSize) }
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

  handleOnChange(value) {
    this.props.changeFilterPrice(Math.round(value));
  }

  getFilterPriceSlider() {
    let maxPrice = 0;
    let minPrice = 0;
    this.props.products.forEach((product) => {
      if (product.price.min < minPrice || minPrice === 0) {
        minPrice = product.price.min;
        if (maxPrice === 0) {
          maxPrice = product.price.max;
        }
      }
      if (product.price.max > maxPrice || maxPrice === 0) {
        maxPrice = product.price.max;
      }
    });
    const step = 1;
    const currentPrice = this.props.currentFilter.price === 0 ? maxPrice :
      this.props.currentFilter.price;

    return (
      <div className="widget sidebar-links">
        <div className="widget-title">
          <h3>Price:</h3>
        </div>
        <div className="widget-content">
          <Slider
            min={minPrice}
            max={maxPrice}
            step={step}
            value={currentPrice}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          this.getFilterPriceSlider()
        }
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
