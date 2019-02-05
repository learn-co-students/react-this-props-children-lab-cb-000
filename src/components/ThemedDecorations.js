import React from 'react';

export default class ThemedDecoration extends React.Component {
  render() {
    const childrenWithClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>{childrenWithClassName}</div>
    );
  }
}
