// Code ThemedDecoration Component Here
import React from 'react'

export default Class ThemedDecorations extends React.Component{
  render(){

    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {child.className = this.props.theme})
    })
    return(
      <div className="themed-decorations">
        <p>{childrenWithExtraProp}</p>
      </div>
    )
  }
}
