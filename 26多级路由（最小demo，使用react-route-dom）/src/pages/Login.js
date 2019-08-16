import React, { Component } from 'react'

class Login extends Component {
  handleLogin() {
    this.props.history.push('/index/hebei/shijiazhuang')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin.bind(this)}>登录</button>
      </div>
    )
  }
}

export default Login
