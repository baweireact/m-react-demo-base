import React, { Component } from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import HeBei from './province/HeiBei.js'
import ShanDong from './province/ShanDong.js'
import ShanXi from './province/ShanXi.js'
import './index.css'

class Index extends Component {
  handleQuit() {
    this.props.history.push('/')
  }
  render() {
    return (
      <BrowserRouter>
        <Route>
          <div className="m-header">多级路由 <span to="/" className="m-quit" onClick={this.handleQuit.bind(this)}>退出</span></div>
          <div className='m-sidebar'>
            <NavLink to="/index/hebei/shijiazhuang/changan" className="m-province">河北</NavLink>
            <NavLink to="/index/shandong" className="m-province">山东</NavLink>
            <NavLink to="/index/shanxi" className="m-province">山西</NavLink>
          </div>
        </Route>
        <Route path="/index/hebei" component={HeBei}></Route>
        <Route path="/index/shandong" component={ShanDong}></Route>
        <Route path="/index/shanxi" component={ShanXi}></Route>
      </BrowserRouter>
    )
  }
}

export default Index
