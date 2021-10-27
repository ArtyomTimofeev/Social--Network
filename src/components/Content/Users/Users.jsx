import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/user.png';
import s from './Users.module.css';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div className={s.avatar}>
              <NavLink to={'/profile/' + user.id}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollowTK(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.followTK(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </div>
      ))}
      <div className={s.pages}>
        {pages.map((page) => (
          <span
            onClick={() => {
              props.onPageChangedTK(page);
            }}
            className={props.currentPage === page && s.selectedPage}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
