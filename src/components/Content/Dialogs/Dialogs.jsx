import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogsItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={s.dialogsItem}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogsItem name="John" id="1" />
          <DialogsItem name="Shon" id="2" />
          <DialogsItem name="Evan" id="3" />
          <DialogsItem name="Nick" id="4" />
          <DialogsItem name="Alex" id="5" />
          <DialogsItem name="Mike" id="6" />
        </div>
        <div className={s.messages}>
          <Message message="Yo" />
          <Message message="Hello" />
          <Message message="Salam" />
          <Message message="Yo yo" />
          <Message message="Wtf?!" />
          <Message message="Hi" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
