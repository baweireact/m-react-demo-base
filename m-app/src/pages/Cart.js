import React, { Component } from 'react'
import { Checkbox } from 'antd'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myCart: []
    }
  }

  handleGroup(index, e) {
    let { myCart } = this.state
    myCart[index].checked = e.target.checked
    this.setState({
      myCart
    })
  }

  handleChecked(index, innerIndex, e) {
    let { myCart } = this.state
    myCart[index].list[innerIndex].checked = e.target.checked
    this.setState({
      myCart
    })
  }

  handleSub(index, innerIndex) {
    let { myCart } = this.state
    if (myCart[index].list[innerIndex].count > 1) {
      myCart[index].list[innerIndex].count = myCart[index].list[innerIndex].count - 1
    }
    this.setState({
      myCart
    })
  }
  handleAdd(index, innerIndex) {
    let { myCart } = this.state
    myCart[index].list[innerIndex].count = myCart[index].list[innerIndex].count + 1
    this.setState({
      myCart
    })
  }

  componentDidMount() {
    let list = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    let myCart = []
    for (let i = 0; i < list.length; i++) {
      let temp = {
        checked: true,
        title: list[i].categoryName,
        list: []
      }
      for (let j = 0; j < list[i].spuList.length; j++) {
        if (list[i].spuList[j].count >= 1) {
          list[i].spuList[j].checked = true
          temp.list.push(list[i].spuList[j])
        }
      }
      if (temp.list.length > 0) {
        myCart.push(temp)
      }
    }

    console.log(myCart)

    this.setState({
      list,
      myCart,
    })
  }
  render() {
    let { myCart } = this.state
    let myCartDom
    if (myCart.length > 0) {
      myCartDom = myCart.map((item, index) => (
        <div key={index}>
          <div>
            <Checkbox className="m-cart-group-checkbox" checked={item.checked} onChange={this.handleGroup.bind(this, index)}>{item.title}</Checkbox>
          </div>
          {
            item.list.map((innerItem, innerIndex) => (
              <div key={innerIndex} className="m-cart-checkbox-wrap">
                <Checkbox className="m-cart-checkbox" checked={innerItem.checked} onChange={this.handleChecked.bind(this, index, innerIndex)}>{innerItem.spuName}</Checkbox>
                <span className="m-right-item-price">¥{innerItem.currentPrice}</span>
                <div className="m-cart-order-wrap">
                  <span
                    className={"m-order-sub-btn " + (innerItem.count >= 1 ? 'active' : '')}
                    onClick={this.handleSub.bind(this, index, innerIndex)}>-</span>
                  <span
                    className={"m-order-count " + (innerItem.count >= 1 ? 'active' : '')}>{innerItem.count}</span>
                  <span className="m-order-add-btn" onClick={this.handleAdd.bind(this, index, innerIndex)}>+</span>
                </div>
              </div>
            ))
          }
        </div>
      ))
    }

    return (
      <div className="m-main">
        <div className="m-cart">
          {myCartDom}
        </div>
      </div>
    )
  }
}
