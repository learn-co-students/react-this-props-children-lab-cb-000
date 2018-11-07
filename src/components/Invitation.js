// Code Invitation Component Here
import React from 'react';

export default class Inventation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
          {this.props.children}
      </div>
    )
  }
}
