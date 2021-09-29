import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        imgUrl:
          'https://w7.pngwing.com/pngs/891/105/png-transparent-computer-icons-user-others-miscellaneous-face-service.png',
        followed: false,
        fullName: 'Artyom',
        status: 'React dev',
        location: {
          city: 'Ekaterinburg',
          country: 'Russia',
        },
      },
      {
        id: 2,
        imgUrl:
          'https://w7.pngwing.com/pngs/891/105/png-transparent-computer-icons-user-others-miscellaneous-face-service.png',
        followed: true,
        fullName: 'Alex',
        status: 'Angular dev',
        location: {
          city: 'Moscow',
          country: 'Russia',
        },
      },
      {
        id: 3,
        imgUrl:
          'https://w7.pngwing.com/pngs/891/105/png-transparent-computer-icons-user-others-miscellaneous-face-service.png',
        followed: false,
        fullName: 'Nick',
        status: 'Vue dev',
        location: {
          city: 'Saint-P',
          country: 'Russia',
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.avatar}>
              <img src={u.imgUrl} />
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
