import React from 'react';

class ThemedParty extends React.Component {
  render() {
    return (
      React.Children.map(this.props.children, function(child){
        <div className="{this.props.theme}.">{child}</div>
      });
    )
  }
}
export default ThemedParty;
