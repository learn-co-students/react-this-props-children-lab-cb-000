// Code Invitation Component Here
import React from 'react'

export default Class Invitation extends React.Component{
  render(){
    return(
      <div className="invitation">
        <h1> Youve been invited! </h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
