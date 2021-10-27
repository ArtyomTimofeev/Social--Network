import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsersProfileTK } from '../../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router';

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

const WithDataUrlProfileContainer = withRouter(ProfileContainer);

export default ProfileContainer = connect(mapStateToProps, {
  setUsersProfileTK,
})(WithDataUrlProfileContainer);
