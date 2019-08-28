import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="m-header">
        <NavLink to="/home/contact" className="m-header-nav-item">联系我们</NavLink>
        <NavLink to="/home/about" className="m-header-nav-item">关于我们</NavLink>
      </div>
    )
  }
}
