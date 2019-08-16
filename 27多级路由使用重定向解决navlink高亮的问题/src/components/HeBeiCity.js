import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HeBeiCity extends Component {
  render() {
    return (
      <div className="m-city-nav">
        <NavLink to="/index/hebei/shijiazhuang" className="m-city-nav-item">石家庄</NavLink>
        <NavLink to="/index/hebei/zhangjiakou" className="m-city-nav-item">张家口</NavLink>
        <NavLink to="/index/hebei/chengde" className="m-city-nav-item">承德</NavLink>
      </div>
    )
  }
}
