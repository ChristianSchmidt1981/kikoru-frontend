import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import ProductSearch from '../components/ProductSearch.jsx';

/*const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleProductSearch = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(ProductSearch);

export default VisibleProductSearch;
