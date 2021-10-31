import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsersProfileTK } from '../../../redux/profile-reducer';
import Profile from './Profile';
import { Redirect, withRouter } from 'react-router';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

export class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.setUsersProfileTK(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
export default compose(
  connect(mapStateToProps, {
    setUsersProfileTK,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
