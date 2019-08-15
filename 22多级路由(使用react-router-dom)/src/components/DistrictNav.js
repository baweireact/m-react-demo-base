import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DistrictNav extends Component {
  render() {
    return (
      <div className="m-district-nav-wrap">
        <NavLink to="/index/hebei/shijiazhuang/changan" className="m-district">长安区</NavLink>
        <NavLink to="/index/hebei/shijiazhuang/qiaoxi" className="m-district">桥西区</NavLink>
        <NavLink to="/index/hebei/shijiazhuang/xinhua" className="m-district">新华区</NavLink>
      </div>
    )
  }
}
