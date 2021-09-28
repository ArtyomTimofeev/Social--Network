import React from 'react';
import { connect } from 'react-redux';
import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
