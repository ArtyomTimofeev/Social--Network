import React from 'react';

import DialogsItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageForm from './NewMessageForm/NewMessageForm';
import styles from './Dialogs.module.scss';

const Dialogs = ({ dialogsPage, addMessage }) => {
  let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  return (
    <div className={styles.dialogsContainer}>
      <div className={styles.dialogsPage}>
        <div className={styles.dialogs}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <div className={styles.newMessageForm}>
        <NewMessageForm addMessage={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
