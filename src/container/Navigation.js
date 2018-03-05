import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import Navigation from '../components/Navigation.jsx';

/*const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleNavigation = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(Navigation);

export default VisibleNavigation;
