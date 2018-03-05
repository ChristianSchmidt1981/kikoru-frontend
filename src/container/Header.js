import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import Header from '../components/Header.jsx';

/*const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleHeader= connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(Header);

export default VisibleHeader;
