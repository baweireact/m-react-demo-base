import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  handleHeaderText(headerText) {
    this.props.onHeaderText(headerText)
  }
  render() {
    return (
      <div className="m-footer">
        <NavLink 
          to="/main/index" 
          className="m-footer-nav-item" 
          onClick={this.handleHeaderText.bind(this, '猫眼电影')}>电影</NavLink>
        <NavLink 
          to="/main/cinema" 
          className="m-footer-nav-item"
          onClick={this.handleHeaderText.bind(this, '影院')}>影院</NavLink>
        <NavLink 
          to="/main/me" 
          className="m-footer-nav-item"
          onClick={this.handleHeaderText.bind(this, '我的')}>我的</NavLink>
      </div>
    )
  }
}
