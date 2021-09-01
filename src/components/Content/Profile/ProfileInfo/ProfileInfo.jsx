import react from 'react';

import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div className={s.profileBlock}>
      <div>
        <img src="https://images.all-free-download.com/images/graphiclarge/abstract_beach_cloud_dawn_evening_horizontal_599086.jpg"></img>
      </div>

      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
