import React, { Component } from 'react';
import '../assets/css/navigation.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.changeProductGroup = this.changeProductGroup.bind(this);
  }

  changeProductGroup(event, id) {
    event.preventDefault();
    this.props.selectProductGroup(id);
    this.loadProductsPerGroup();
  }

  loadProductsPerGroup() {
    fetch(`/api/getPrices?id=${this.props.currentProductGroup}`)
      .then(response => response.json())
      .then(response => this.props.initProducts(response.value))
      .catch(response => console.log(response));
  }

  componentWillMount() {
    this.loadProductsPerGroup();
    fetch('/api/groupList')
      .then(response => response.json())
      .then(response => this.props.initProductGroups(response.value))
      .catch(response => console.log(response));
  }

  render() {
    return (
      <div className="widget sidebar-links">
        <div className="widget-title">
          <h3>Categories</h3>
        </div>
        <div className="widget-content">
          <ul>
            {
              this.props.productGroup.map((group) => {
                const currentGroups = group.id === this.props.currentProductGroup ? 'current' : '';
                return (
                  <li>
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
