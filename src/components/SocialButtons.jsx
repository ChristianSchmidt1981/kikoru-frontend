import React, { Component } from 'react';

import '../assets/css/socialButtons.css';

export default class SocialButtons extends Component {
  render() {
    return (
      <ul className="social-icons">
      {
        this.props.socialLinks.map((link, idx) => {
          const className = `fa fa-${link.name} fa-lg`;
          return (
          <li key={idx} className={link.name}>
          <a href={link.href} title={link.name}>
            <i className={className} aria-hidden="true"></i>
          </a>
        </li>
        )})
      }
      </ul>
    );
  }
}
