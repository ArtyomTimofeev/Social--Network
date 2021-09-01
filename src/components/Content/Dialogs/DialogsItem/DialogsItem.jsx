import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

const DialogsItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={s.dialogsItem}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
