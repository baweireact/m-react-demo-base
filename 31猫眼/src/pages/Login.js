import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Input, Button, message } from 'antd'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleLogin() {
    let { username, password } = this.state
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('username', username)
      this.props.history.push('/main/me')
    } else {
      message.info('用户名或密码错误')
    }
  }
  render() {
    let {
      username,
      password,
    } = this.state
    return (
      <div className="m-login">
        <div className="m-login-row">
          <Input className="m-login-input" placeholder="请输入用户名" value={username} onChange={this.handleInput.bind(this, 'username')} ></Input>
        </div>
        <div className="m-login-row">
          <Input className="m-login-input" placeholder="请输入密码" type="password" value={password} onChange={this.handleInput.bind(this, 'password')} ></Input>
        </div>
        <div className="m-login-row">
          <Button className="m-login-btn" onClick={this.handleLogin.bind(this)}>登录</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
