import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUsersDataTK, logoutTK } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUsersDataTK();
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

export default HeaderContainer = connect(mapStateToProps, {
  getAuthUsersDataTK,
  logoutTK,
})(HeaderContainer);
