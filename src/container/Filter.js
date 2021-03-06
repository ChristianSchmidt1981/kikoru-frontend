import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFilter, changeFilterPrice } from '../actions/index';
import Filter from '../components/Filter.jsx';

const mapStateToProps = state => ({
  filter: state.filter,
  products: state.products,
  currentFilter: state.currentFilter,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { changeFilter, changeFilterPrice },
  dispatch,
);


const VisibleFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);

export default VisibleFilter;
