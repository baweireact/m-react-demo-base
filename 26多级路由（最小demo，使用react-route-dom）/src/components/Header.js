import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  handleQuit() {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="m-header">
        多级路由
        <button className="m-quit" onClick={this.handleQuit.bind(this)}>退出</button>
      </div>
    )
  }
}

export default withRouter(Header)
