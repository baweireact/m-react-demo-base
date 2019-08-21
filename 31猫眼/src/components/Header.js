import React, { Component } from 'react'

class Header extends Component {
  render() {
    let { headerText } = this.props
    return (
      <div className="m-header">
        {headerText}
      </div>
    )
  }
}

export default Header
