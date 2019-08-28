import React, { Component } from 'react'

export default class Index extends Component {
  handleLogin() {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        index
        <button onClick={this.handleLogin.bind(this)}>登录</button>
      </div>
    )
  }
}
