import React from 'react';

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

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  let onSendMessageClick = () => {
    props.addMessage();
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              placeholder="Enter your message"
              value={props.dialogsPage.newMessageBody}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
