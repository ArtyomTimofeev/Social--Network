import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/user.png';
import s from './Users.module.css';
import * as axios from 'axios';

const UsersPres = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.avatar}>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    debugger;
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'df64f2ff-f9bf-4d2c-851b-941296ed5d30',
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'df64f2ff-f9bf-4d2c-851b-941296ed5d30',
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </div>
      ))}
      <div className={s.pages}>
        {pages.map((page) => (
          <span
            onClick={() => {
              props.onPageChanged(page);
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

export default UsersPres;
