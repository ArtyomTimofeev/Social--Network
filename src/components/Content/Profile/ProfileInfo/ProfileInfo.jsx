import React from 'react';
import Preloader from '../../../Common-components/Preloader';

import s from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;

  return (
    <div className={s.profileBlock}>
      <div>
        <img src="https://images.all-free-download.com/images/graphiclarge/abstract_beach_cloud_dawn_evening_horizontal_599086.jpg"></img>
      </div>

      <div>
        <img src={props.profile.photos.large}></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
