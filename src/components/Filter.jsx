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

  render() {
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
                  <li keys={idx} className="single-filter">
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
}
