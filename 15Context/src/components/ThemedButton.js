import React, {Component} from 'react'
import {ThemeContext} from '../pages/theme-context';

class ThemedButton extends Component {
  render() {
    let value = this.context
    return (
      <div>{value}</div>
    )
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton