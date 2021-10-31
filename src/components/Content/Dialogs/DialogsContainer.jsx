import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
