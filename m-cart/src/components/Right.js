import React, { Component } from 'react'
import { Modal, Button } from 'antd'

export default class Right extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      currentItem: {},
    }
  }
  handleSub() {
    let { currentItem } = this.state
    if (currentItem.count > 1) {
      currentItem.count = currentItem.count - 1
      this.setState({
        currentItem
      })
    }
  }
  handleAdd() {
    let { currentItem } = this.state
    currentItem.count = currentItem.count + 1
    this.setState({
      currentItem
    })
  }

  showAddModal(currentItem) {
    currentItem.count = 1
    this.setState({
      visible: true,
      currentItem
    })
  }

  handleHideModal() {
    this.setState({
      visible: false
    })
  }

  handleAddToCart() {
    let { list, currentIndex } = this.props
    let { currentItem } = this.state
    let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {}

    // let isInCart = false
    // for(let i = 0; i < cart.length; i++) {
    //   if (cart[i].categoryName === list[currentIndex].categoryName) {
    //     for (let j = 0; j < cart[i].list.length; j++) {
    //       if (cart[i].list[j].spuId === currentItem.spuId) {
    //         cart[i].list[j].count = cart[i].list[j].count + currentItem.count
    //         isInCart = true
    //       }
    //     }
    //   }
    // }

    // if (!isInCart) {
    //   currentItem.checked = true
    //   let temp = {
    //     checked: true,
    //     categoryName: list[currentIndex].categoryName,
    //     list: [currentItem]
    //   }
    //   cart.push(temp)
    // }
    if (cart[list[currentIndex].categoryName]) {

    } else {
      currentItem.checked = true
      cart[list[currentIndex].categoryName] = {
        checked: true,
        categoryName: list[currentIndex].categoryName,
        list: [currentItem]
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    this.handleHideModal()
  }

  render() {
    let { list, currentIndex } = this.props
    let { visible, currentItem } = this.state

    let listDom
    if (list.length > 0) {
      listDom = list[currentIndex].spuList.map((item, index) => (
        <div key={item.spuId} className="m-right-item">
          <img src={item.bigImageUrl} alt={item.spuName} className="m-right-item-img"></img>
          <div className="m-right-item-info">
            <div className="m-right-item-title">{item.spuName}</div>
            <div className="m-right-item-price">¥{item.currentPrice}</div>
            <Button onClick={this.showAddModal.bind(this, item)}>加入购物车</Button>
          </div>
        </div>
      ))
    }

    return (
      <div className="m-right">
        {listDom}
        <Modal
          title="加入购物车"
          visible={visible}
          onOk={this.handleAddToCart.bind(this)}
          onCancel={this.handleHideModal.bind(this)}>
          <div className="m-right-order-wrap">
            <span
              className={"m-order-sub-btn " + (currentItem.count >= 1 ? 'active' : '')}
              onClick={this.handleSub.bind(this)}>-</span>
            <span
              className={"m-order-count " + (currentItem.count >= 1 ? 'active' : '')}>{currentItem.count}</span>
            <span className="m-order-add-btn" onClick={this.handleAdd.bind(this)}>+</span>
          </div>
        </Modal>
      </div>
    )
  }
}
