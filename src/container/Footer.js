import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import Footer from '../components/Footer.jsx';

/*const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleFooter = connect(
  null, // mapStateToProps,
  null, // mapDispatchToProps,
)(Footer);

export default VisibleFooter;
