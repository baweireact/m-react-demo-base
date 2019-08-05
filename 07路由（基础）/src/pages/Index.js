import React, {Component} from 'react'
import {withRouter, Link, NavLink} from 'react-router-dom'
import './index.css'

class Index extends Component {
  handleToList() {
    this.props.history.push('/list')
  }
  render() {
    return (
      <div>
        index
        <button onClick={this.handleToList.bind(this)}>跳转</button>
        <Link to="/list">跳转</Link>
        <NavLink to="/index" className="m-link" activeClassName="active">跳转</NavLink>
        <NavLink to="/list" className="m-link" activeClassName="active">跳转</NavLink>
      </div>
    )
  }
}

export default withRouter(Index)