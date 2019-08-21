import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class IndexNav extends Component {
  handleSearch() {
    this.props.history.push('/search')
  }
  render() {
    return (
      <div className="m-index-nav">
        <span className="m-index-nav-item">北京</span>
        <NavLink to="/main/index/hot" className="m-index-nav-item">正在热映</NavLink>
        <NavLink to="/main/index/coming" className="m-index-nav-item">即将上映</NavLink>
        <span className="m-index-nav-item" onClick={this.handleSearch.bind(this)}>搜索</span>
      </div>
    )
  }
}

export default withRouter(IndexNav)
