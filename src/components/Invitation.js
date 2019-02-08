// Code Invitation Component Here
import React, { Component } from 'react';

class Invitation extends Component {
  render() {
    const children = this.props.children;
    return (
      <div>
        <h1>You've been invited!</h1>
        { children }
      </div>
    )
  }
}


export default Invitation;
