import React from 'react';

class Invitation extends React.Component {
  render() {
    return (
      <h1>You{"''"}ve been invited!</h1>
      <p>{this.props.children}</p>
    )
  }
}

export default Invitation;
