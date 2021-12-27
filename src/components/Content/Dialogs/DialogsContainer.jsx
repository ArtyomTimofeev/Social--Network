import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
