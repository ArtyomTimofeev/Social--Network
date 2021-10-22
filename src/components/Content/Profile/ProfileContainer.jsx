import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router';

export class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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

export default ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  WithDataUrlProfileContainer
);
