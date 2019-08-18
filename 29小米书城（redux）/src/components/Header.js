import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="m-header">
        <NavLink to="/index" className="m-header-nav-item">首页</NavLink>
        <NavLink to="/my_book" className="m-header-nav-item">我的书架</NavLink>
      </div>
    )
  }
}
