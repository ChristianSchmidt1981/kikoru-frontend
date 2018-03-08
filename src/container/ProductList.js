import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { updateFile } from '../actions/index';
import ProductList from '../components/ProductList.jsx';

const mapStateToProps = state => ({
  products: state.products
    // filter based on product-size
    .filter((product) => {
      const validSizes = product.size.filter(size => state.currentFilter.size.includes(size));
      return Object.keys(validSizes) > 0 || state.currentFilter.size.length === 0;
    })

    // filter based on brand
    .filter((product) => {
      return state.currentFilter.brand.includes(product.brand) ||
        state.currentFilter.brand.length === 0;
    })

    // filter based on searchstring
    .filter(product =>
      state.searchProducts === '' ||
      product.name.toLowerCase().includes(state.currentSearchString.toLowerCase()) ||
      product.brand.toLowerCase().includes(state.currentSearchString.toLowerCase()) ||
      product.description.toLowerCase().includes(state.currentSearchString.toLowerCase())),

  productGroup: state.productGroup.filter(group => group.id === state.currentProductGroup)[0],
});

/*const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleProductList = connect(
  mapStateToProps,
  null, // mapDispatchToProps,
)(ProductList);

export default VisibleProductList;
