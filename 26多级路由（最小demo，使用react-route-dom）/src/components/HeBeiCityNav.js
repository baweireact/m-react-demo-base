import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class HeBeiCityNav extends Component {
  render() {
    return (
      <div className="m-city-nav">
        <NavLink to="/index/hebei/shijiazhuang" className="m-city-nav-item">石家庄</NavLink>
        <NavLink to="/index/hebei/qinhuangdao" className="m-city-nav-item">秦皇岛</NavLink>
        <NavLink to="/index/hebei/tangshan" className="m-city-nav-item">唐山</NavLink>
      </div>
    )
  }
}
