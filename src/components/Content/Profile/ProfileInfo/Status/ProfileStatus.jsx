import React from 'react';
import s from './ProfileStatus.module.css';
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    profileStatus: this.props.profileStatus,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  disabledEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateProfileStatusTK(this.state.profileStatus);
  };

  onStatusChange = (e) => {
    this.setState({ profileStatus: e.target.value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ profileStatus: this.props.profileStatus });
    }
  }
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>
              {this.props.profileStatus}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.disabledEditMode}
              value={this.state.profileStatus}
              type="text"
              onChange={this.onStatusChange}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
