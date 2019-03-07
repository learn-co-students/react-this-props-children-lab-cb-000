import React from 'react' ;

export default class ThemedDecorations extends React.Component {


  render() {
    var theme = this.props.theme ;
    const themedChildren = React.Children.map(this.props.children, child => {
      return (
        React.cloneElement( child, {
          className: theme
        })
      )
    })
    return (
      <div>
        {themedChildren}
      </div>
    )
  }
}
