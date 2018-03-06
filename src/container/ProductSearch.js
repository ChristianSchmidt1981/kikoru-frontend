import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchProducts } from '../actions/index';
import ProductSearch from '../components/ProductSearch.jsx';

/* const mapStateToProps = state => ({
}); */
const mapDispatchToProps = dispatch => bindActionCreators(
  { searchProducts },
  dispatch,
);

const VisibleProductSearch = connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(ProductSearch);

export default VisibleProductSearch;
