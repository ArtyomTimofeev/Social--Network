import React from 'react';
import userPhoto from '../../../assets/images/user.png';
import s from './Users.module.css';

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
              <img src={u.photos.small != null ? u.photos.small : userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
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
