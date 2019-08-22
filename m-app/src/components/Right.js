import React, { Component } from 'react'

export default class Right extends Component {
  handleSub(food) {
    let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    let index = cart.findIndex(item => item.spuId === food.spuId)
    if (index >= 0) {
      cart[index].count = cart[index].count - 1
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  handleAdd(food) {
    let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    let index = cart.findIndex(item => item.spuId === food.spuId)
    if (index >= 0) {
      cart[index].count = cart[index].count + 1
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      food.count = 1
      cart.push(food)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  render() {
    let { list, currentIndex } = this.props

    let listDom
    if (list.length > 0) {
      listDom = list[currentIndex].spuList.map((item, index) => (
        <div key={item.spuId} className="m-right-item">  
          <img src={item.bigImageUrl} alt={item.spuName} className="m-right-item-img"></img>
          <div className="m-right-item-info">
            <div className="m-right-item-title">{item.spuName}</div>
            <div className="m-right-item-price">¥{item.currentPrice}</div>
            <div className="m-right-order-wrap">
              <span className="m-order-sub-btn" onClick={this.handleSub.bind(this, item)}>-</span>
              <span className="m-order-count">{item.count}</span>
              <span className="m-order-add-btn" onClick={this.handleAdd.bind(this, item)}>+</span>
            </div>
          </div>
        </div>
      ))
    }

    return (
      <div className="m-right">
        {listDom}
      </div>
    )
  }
}
