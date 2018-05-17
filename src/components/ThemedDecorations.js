
import React from 'react'

export default class ThemedDecorations extends React.Component{
  render(){
    const childrenWithWrapperDiv = React.Children.map(
      this.props.children, (child, i) => {
        return (
          React.cloneElement( child, {
          	className: this.props.theme
          })
        )
      })

      return(
        <div>
            {childrenWithWrapperDiv}
        </div>
          )}
}
