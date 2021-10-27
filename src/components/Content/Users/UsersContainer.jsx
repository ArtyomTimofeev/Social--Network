import React from 'react';
import { connect } from 'react-redux';
import {
  followTK,
  getUsersTK,
  onPageChangedTK,
  unfollowTK,
} from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../Common-components/Preloader';
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersTK(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default UsersContainer = connect(mapStateToProps, {
  followTK,
  unfollowTK,
  getUsersTK,
  onPageChangedTK,
})(UsersContainer);
