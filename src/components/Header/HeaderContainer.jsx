import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUsersData } from '../../redux/auth-reducer';
import Header from './Header';
import API from '../../api/api';

class HeaderContainer extends Component {
  componentDidMount() {
    API.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        this.props.setAuthUsersData(id, email, login);
      }
    });
  }

  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default HeaderContainer = connect(mapStateToProps, { setAuthUsersData })(
  HeaderContainer
);
