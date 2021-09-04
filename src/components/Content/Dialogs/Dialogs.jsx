import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './MessageItem/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
