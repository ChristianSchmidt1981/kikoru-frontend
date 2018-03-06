import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import ProductList from '../components/ProductList.jsx';

const mapStateToProps = state => ({
  products: state.products[state.currentProductGroup].filter((product) => {
    const validSizes = product.size.filter(size => state.currentFilter.size.includes(size));
    return Object.keys(validSizes) > 0 || state.currentFilter.size.length === 0;
  }),
  productGroup: state.productGroup.filter(group => group.id === state.currentProductGroup)[0],
});

/*const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleProductList = connect(
  mapStateToProps,
  null, // mapDispatchToProps,
)(ProductList);

export default VisibleProductList;
