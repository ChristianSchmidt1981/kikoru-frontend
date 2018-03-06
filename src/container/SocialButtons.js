import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFile } from '../actions/index';
import SocialButtons from '../components/SocialButtons.jsx';

const mapStateToProps = state => ({
  socialLinks: state.socialLinks,
});

/*const mapDispatchToProps = dispatch => bindActionCreators(
);*/

const VisibleSocialButtons = connect(
  mapStateToProps,
  null, // mapDispatchToProps,
)(SocialButtons);

export default VisibleSocialButtons;
