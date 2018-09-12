import React from 'react';

class Invitation extends React.Component {
  render() {
    return (
      <h1>You{"''"}ve been invited!</h1>
      {this.props.children}
    )
  }
};

export default Invitation;
