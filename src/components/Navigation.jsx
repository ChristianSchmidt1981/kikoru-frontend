import React, { Component } from 'react';
import '../assets/css/navigation.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.changeProductGroup = this.changeProductGroup.bind(this);
  }

  changeProductGroup(event, id) {
    event.preventDefault();
    this.props.selectSubProductGroup(id);
    this.loadProductsPerGroup(id);
  }

  loadProductsPerGroup(productId) {
    fetch(`/getPrices?id=${productId}`)
      .then(response => response.json())
      .then(response => this.props.initProducts(response.value))
      .catch(response => console.log(response));
  }

  getProductGroup() {
    for (let i = 0; i < this.props.productGroup.length; i += 1) {
      if (this.props.productGroup[i].id === this.props.currentProductGroup) {
        return this.props.productGroup[i];
      }
    }

    return null;
  }

  render() {
    const productGroup = this.getProductGroup();
    let subGroups = [];

    if (productGroup !== null) {
      subGroups = productGroup.subGroups;
    }

    return (
      <div className="widget sidebar-links">
        <div className="widget-content">
          <ul>
            {
              subGroups.map((group, idx) => {
                const currentGroups = group.id === this.props.currentSubProductGroup ? 'current' : '';
                return (
                  <li key={idx}>
                    <a
                      href={group.link}
                      onClick={event => this.changeProductGroup(event, group.id)}
                      className={currentGroups}
                    >
                      {group.name}
                    </a>
                  </li>
                )})
            }
          </ul>
        </div>
      </div>
    );
  }
}
