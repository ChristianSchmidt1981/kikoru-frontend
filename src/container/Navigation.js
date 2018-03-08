import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectProductGroup,
  initProductGroups,
  initProducts,
  selectSubProductGroup,
} from '../actions/index';
import Navigation from '../components/Navigation.jsx';

const mapStateToProps = state => ({
  productGroup: state.productGroup,
  currentProductGroup: state.currentProductGroup,
  currentSubProductGroup: state.currentSubProductGroup,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    selectProductGroup,
    selectSubProductGroup,
    initProductGroups,
    initProducts,
  },
  dispatch,
);

const VisibleNavigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

export default VisibleNavigation;
