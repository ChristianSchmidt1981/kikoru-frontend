import React, { Component } from 'react';
import '../assets/css/navigation.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    this.a = 'a';
  }

  getLinks() {
    this.a = 'a';
    return [
      { link: '#', label: 'Bags & Accessories'},
      { link: '#', label: 'Comos De Milano'},
      { link: '#', label: 'Express Order Demo'},
      { link: '#', label: 'Lorem Et Dorus'},
      { link: '#', label: 'Lynn Cosmopolis'},
      { link: '#', label: 'Men'},
      { link: '#', label: 'Milancelos A Lanos'},
    ];
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
              this.getLinks().map(link => (
                <li>
                  <a href={link.link}>{link.label}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
