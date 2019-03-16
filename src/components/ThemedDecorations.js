import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const theme = this.props.theme;

    const decorationsWithTheme = React.Children.map(this.props.children, decoration => {
      return React.cloneElement(decoration, {
        className: theme
      })
    });

    return (
      <div>
        {decorationsWithTheme}
      </div>
    )
  }
}

export default ThemedDecorations;
