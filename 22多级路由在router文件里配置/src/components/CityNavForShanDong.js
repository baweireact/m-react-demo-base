import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class CityNavForShanDong extends Component {
  render() {
    return (
      <div className="m-city-nav-warp">
        <NavLink to="/index/shandong/jinan" className="m-city">济南</NavLink>
        <NavLink to="/index/shandong/qingdao" className="m-city">青岛</NavLink>
        <NavLink to="/index/shandong/yantai" className="m-city">烟台</NavLink>
      </div>
    )
  }
}

export default withRouter(CityNavForShanDong)
