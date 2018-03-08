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

  loadProductsPerGroup(productId) {
    fetch(`/getPrices?id=${productId}`)
      .then(response => response.json())
      .then(response => this.props.initProducts(response.value))
      .catch(response => console.log(response));
  }

  componentWillMount() {
    this.loadProductsPerGroup(this.props.currentProductGroup);
    fetch('/groupList')
      .then(response => response.json())
      .then(response => this.props.initProductGroups(response.value))
      .catch(response => console.log(response));
  }

  render() {
    return (
      <div className="navigation-top">
        <nav className="nav-bar" role="navigation">
          <ul className="site-nav">
            {
              this.props.productGroup.map((group, idx) => {
                const currentGroups = group.id === this.props.currentProductGroup ? 'link active' : 'link';
                return (<li key={idx} className="item">
                  <a
                    href={group.link}
                    className={currentGroups}
                    onClick={event => this.changeProductGroup(event, group.id)}
                  >
                    {group.name}
                  </a>
                </li>);
              })
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