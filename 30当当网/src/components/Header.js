import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="m-header">
        <input type="text" placeholder="搜索商品/店铺/种类" className="m-search-input"></input>
      </div>
    )
  }
}
