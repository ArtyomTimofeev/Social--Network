import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialogsItem + ' ' + s.active}>John</div>
          <div className={s.dialogsItem}>Zack</div>
          <div className={s.dialogsItem}>Shon</div>
          <div className={s.dialogsItem}>Evan</div>
          <div className={s.dialogsItem}>Nick</div>
          <div className={s.dialogsItem}>Alex</div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Yo</div>
          <div className={s.message}>Hello</div>
          <div className={s.message}>Salam</div>
          <div className={s.message}>Yo yo</div>
          <div className={s.message}>Wtf</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
