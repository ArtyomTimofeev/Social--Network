import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateProfileStatusTK,
  getProfileStatusTK,
  setUsersProfileTK,
} from '../../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

export class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 15068;
    this.props.setUsersProfileTK(userId);
    this.props.getProfileStatusTK(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  profileStatusText: state.profilePage.profileStatusText,
});
export default compose(
  connect(mapStateToProps, {
    setUsersProfileTK,
    updateProfileStatusTK,
    getProfileStatusTK,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
