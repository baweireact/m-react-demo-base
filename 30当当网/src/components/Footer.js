import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <NavLink to="/index" className="m-footer-nav-item">首页</NavLink>
        <NavLink to="/category" className="m-footer-nav-item">分类</NavLink>
        <NavLink to="/worth" className="m-footer-nav-item">值得买</NavLink>
        <NavLink to="/cart" className="m-footer-nav-item">购物车</NavLink>
        <NavLink to="/me" className="m-footer-nav-item">我的</NavLink>
      </div>
    )
  }
}
