import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../../assets/images/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} & count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={s.avatar}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
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
                this.onPageChanged(page);
              }}
              className={this.props.currentPage === page && s.selectedPage}
            >
              {page}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
export default Users;
