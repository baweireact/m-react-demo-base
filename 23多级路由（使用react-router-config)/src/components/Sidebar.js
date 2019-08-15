import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class Sidebar extends Component {
  handleHeBei(e) {
    this.props.history.push('/index/hebei/shijiazhuang/changan')
    e.preventDefault()
  }
  handleShanDong(e) {
    this.props.history.push('/index/shandong/jinan')
    e.preventDefault()
  }
  render() {
    return (
      <div className='m-sidebar'>
        <NavLink to="/index/hebei" className="m-province" onClick={this.handleHeBei.bind(this)}>河北</NavLink>
        <NavLink to="/index/shandong" className="m-province" onClick={this.handleShanDong.bind(this)}>山东</NavLink>
        <NavLink to="/index/shanxi" className="m-province">山西</NavLink>
      </div>
    )
  }
}

export default withRouter(Sidebar)
