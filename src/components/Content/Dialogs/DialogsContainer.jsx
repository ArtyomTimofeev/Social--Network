import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let updateNewMessageBody = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  };
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  return (
    <Dialogs
      updateNewMessageBody={updateNewMessageBody}
      addMessage={addMessage}
      dialogsPage={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
