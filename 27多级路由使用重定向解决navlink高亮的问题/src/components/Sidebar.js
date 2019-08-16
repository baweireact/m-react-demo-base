import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class Sidebar extends Component {
  handleLink(url, e) {
    // this.props.history.push(url)
    // e.preventDefault()
  }
  render() {
    return (
      <div className="m-sidebar">
        <NavLink to="/index/hebei" className="m-sidebar-item" 
          onClick={this.handleLink.bind(this, '/index/hebei/shijiazhuang')}>河北</NavLink>
        <NavLink to="/index/shandong" className="m-sidebar-item">山东</NavLink>
        <NavLink to="/index/shanxi" className="m-sidebar-item">山西</NavLink>
      </div>
    )
  }
}

export default withRouter(Sidebar)