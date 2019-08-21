import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Input, Button, message} from 'antd'
import './index.css'

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
    let {username, password} = this.state

    if (username.trim() === '') {
      message.info('用户名不能为空')
      return
    } else if (password === '') {
      message.info('密码不能为空')
      return
    }

    axios({
      url: '/login',
      data: {
        username,
        password
      },
      method: 'post'
    }).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        //message.info(res.data.message)
        this.props.history.push('/index')
      } else {
        message.info(res.data.message)
      }
    })
  }

  render() {
    let {
      username,
      password,
    } = this.state

    return (
      <div className="m-wrap">
        <div className="m-title">
          登录
        </div>
        <div className="m-row">
          <Input placeholder="请输入用户名" value={username} onChange={this.handleInput.bind(this, 'username')}></Input>
        </div>
        <div className="m-row">
          <Input type="password" placeholder="请输入密码" value={password} onChange={this.handleInput.bind(this, 'password')}></Input>
        </div>
        <Button className="m-btn" onClick={this.handleLogin.bind(this)}>登录</Button>
      </div>
    )
  }
}

export default withRouter(Login)