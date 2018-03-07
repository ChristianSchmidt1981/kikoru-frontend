import React, { Component } from 'react';
import '../assets/css/navigationTop.css';

export default class NavigationTop extends Component {
  constructor(props) {
    super(props);
    this.changeProductGroup = this.changeProductGroup.bind(this);
  }

  changeProductGroup(event, id) {
    event.preventDefault();
    this.props.selectProductGroup(id);
    this.loadProductsPerGroup(id);
  }

  getLinks() {
    return [
      {link:'#', label:'Men'},
      {link:'#', label:'Women'},
      {link:'#', label:'Children'},
      {link:'#', label:'Baby'},
    ];
  }

  render() {
    return (
      <div className="navigation-top">
        <nav className="nav-bar" role="navigation">
          <ul className="site-nav">
            {
              this.getLinks().map(link => (
                <li className="item">
                  <a className="link active" href={link.label}>{link.label}</a> 	
                </li>
              ))
            }
          </ul>
        </nav>
      </div>);
  }
}
/*
<script>
  var heightHeader = jQuery('.site-header').outerHeight();
  var heightTop = jQuery('.site-header').outerHeight();

  jQuery(window).scroll(function () {
 
      var scrollTop = jQuery(this).scrollTop();
      var w = window.innerWidth;
      if (scrollTop > heightHeader) {
        if (w > 767) {
          jQuery('body').addClass('have-fixed');
         jQuery('.header-bottom').addClass('on');
          jQuery('.nav-search').removeClass('on');
         jQuery('.main-content').css('padding-top',heightHeader);
        }
      }
      else {
        jQuery('.header-bottom').removeClass('on');
         jQuery('.nav-search').addClass('on');
        jQuery('body').removeClass('have-fixed');
           jQuery('.main-content').css('padding-top',0);
      }

  });
</script>
*/