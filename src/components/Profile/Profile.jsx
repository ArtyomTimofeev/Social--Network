import react from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://images.all-free-download.com/images/graphiclarge/abstract_beach_cloud_dawn_evening_horizontal_599086.jpg"></img>
      </div>

      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
