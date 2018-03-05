import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import ProductList from '../components/ProductList.jsx';

/*const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleProductList = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(ProductList);

export default VisibleProductList;
