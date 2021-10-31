import React from 'react';

import s from './ProfileStatus.module.css';
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.disabledEditMode}
              value={this.props.status}
              type="text"
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
