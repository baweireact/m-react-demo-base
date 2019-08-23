import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    let { list, currentIndex } = this.props
    let listDom = list.map((item, index) => (
      <div 
        key={index} 
        className={"m-sidebar-item " + (currentIndex === index ? 'active' : '') } 
        onClick={this.props.onNav.bind(this, index)}>
        {item.categoryName}
      </div>
    ))
    return (
      <div className="m-sidebar">
        {listDom}
      </div>
    )
  }
}
