import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class CityNav extends Component {
  handleShiJiaZhuang(e) {
    this.props.history.push('/index/hebei/shijiazhuang/changan')
    e.preventDefault()
  }
  render() {
    return (
      <div className="m-city-nav-warp">
        <NavLink to="/index/hebei/shijiazhuang" className="m-city" onClick={this.handleShiJiaZhuang.bind(this)}>石家庄</NavLink>
        <NavLink to="/index/hebei/tangshan" className="m-city">唐山</NavLink>
        <NavLink to="/index/hebei/qinhuangdao" className="m-city">秦皇岛</NavLink>
      </div>
    )
  }
}

export default withRouter(CityNav)
