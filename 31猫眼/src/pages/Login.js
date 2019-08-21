import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  handleLogin() {
    localStorage.setItem('username', 'xu')
    this.props.history.push('/main/me')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin.bind(this)}>登录</button>
      </div>
    )
  }
}

export default withRouter(Login)
