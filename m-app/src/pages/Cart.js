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
    for (let i = 0; i < myCart[index].list.length; i++) {
      myCart[index].list[i].checked = e.target.checked
    }
    this.setState({
      myCart
    })
  }

  handleChecked(index, innerIndex, e) {
    let { myCart } = this.state
    myCart[index].list[innerIndex].checked = e.target.checked
    let checkedCount = 0
    for (let i = 0; i < myCart[index].list.length; i++) {
      if (myCart[index].list[i].checked) {
        checkedCount++
      }
    }
    myCart[index].checked = checkedCount === myCart[index].list.length
    this.setState({
      myCart
    })
  }

  // checkboxState() {
  //   let { myCart } = this.state
  //   let groupCheckedCount = 0
  //   for (let i = 0; i < myCart.length; i++) {
  //     let checkboxCheckedCount = 0
  //     if (myCart[i].checked) {
  //       groupCheckedCount++
  //     }
  //     for (let j = 0; j < myCart[i].list.length; j++) {
  //       if (myCart[i].list[j].checked) {
  //         checkboxCheckedCount++
  //       }
  //     }
  //     myCart[i].checked = checkboxCheckedCount === myCart[i].list.length
  //   }
  //   this.setState({
  //     myCart,
  //     groupCheckedCount
  //   })
  // }

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

  total() {
    let { myCart } = this.state
    let totalPrice = 0, totalNum = 0
    for (let i = 0; i < myCart.length; i++) {
      for (let j = 0; j < myCart[i].list.length; j++) {
        if (myCart[i].list[j].checked) {
          totalPrice = totalPrice + myCart[i].list[j].currentPrice * myCart[i].list[j].count
          totalNum = totalNum + myCart[i].list[j].count
        }
      }
    }
    return {
      totalPrice,
      totalNum,
    }
  }

  handleSelectAll(e) {
    let { myCart } = this.state
    for (let i = 0; i < myCart.length; i++) {
      myCart[i].checked = e.target.checked
      for (let j = 0; j < myCart[i].list.length; j++) {
        myCart[i].list[j].checked = e.target.checked
      }
    }
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
    let { totalPrice, totalNum } = this.total()
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

    let groupCheckedCount = 0
    for (let i = 0; i < myCart.length; i++) {
      if (myCart[i].checked) {
        groupCheckedCount++
      }
    }

    return (
      <div className="m-main">
        <div className="m-cart">
          {myCartDom}
          <div>
            <Checkbox className="m-select-all" checked={groupCheckedCount === myCart.length} onClick={this.handleSelectAll.bind(this)}>全选</Checkbox>
          </div>
          <div className="m-total-wrap">
            <span>总价：</span>
            <span className="m-total-num">{totalPrice}</span>
            <span>总数：</span>
            <span className="m-total-num">{totalNum}</span>
          </div>
        </div>
      </div>
    )
  }
}
