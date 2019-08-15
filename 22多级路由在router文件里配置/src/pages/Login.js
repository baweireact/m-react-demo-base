import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
  handleLogin() {
    this.props.history.push('/index/hebei/shijiazhuang/changan')
  }
  render() {
    return (
      <div className="m-login">
        <h1>登录页</h1>
        <div>
          <input type='text' placeholder="请输入用户名"></input>
        </div>
        <div>
          <input type='password' placeholder="请输入密码"></input>
        </div>
        <div>
          <button onClick={this.handleLogin.bind(this)}>登录</button>
        </div>
        <Link to="/index/hebei/shijiazhuang/changan">登录</Link>
      </div>
    )
  }
}
