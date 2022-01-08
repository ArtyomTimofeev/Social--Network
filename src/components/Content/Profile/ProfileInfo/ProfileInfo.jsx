import React from 'react';
import Preloader from '../../../Common-components/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;

  return (
    <div className={s.profileBlock}>
      <div>
        <img src={props.profile.photos.large}></img>
      </div>
      <ProfileStatus {...props} />
    </div>
  );
};

export default ProfileInfo;
