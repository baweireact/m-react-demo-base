import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  handleQuit() {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className="m-header">
        多级路由
        <button onClick={this.handleQuit.bind(this)}>退出</button>
      </div>
    )
  }
}

export default withRouter(Header)
