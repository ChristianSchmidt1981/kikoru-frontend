import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/*import {
  selectProductGroup,
  initProductGroups,
  initProducts,
} from '../actions/index';*/
import NavigationTop from '../components/NavigationTop.jsx';

/*
const mapStateToProps = state => ({
  productGroup: state.productGroup,
  currentProductGroup: state.currentProductGroup,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    selectProductGroup,
    initProductGroups,
    initProducts,
  },
  dispatch,
);
*/
const VisibleNavigationTop = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(NavigationTop);

export default VisibleNavigationTop;
