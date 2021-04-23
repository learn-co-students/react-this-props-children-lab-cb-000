import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const childWithClass = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    
    return(
      <div className="">
        {childWithClass}
      </div>
    );
  }
}

export default ThemedDecorations;