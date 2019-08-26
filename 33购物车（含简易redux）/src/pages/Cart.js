import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myCart: []
    }
  }

  //全选
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

  //选择分类
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

  //选择某一项
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

  //减
  handleSub(index, innerIndex) {
    let { myCart } = this.state
    if (myCart[index].list[innerIndex].count > 1) {
      myCart[index].list[innerIndex].count = myCart[index].list[innerIndex].count - 1
    }
    this.setState({
      myCart
    })
  }

  //加
  handleAdd(index, innerIndex) {
    let { myCart } = this.state
    myCart[index].list[innerIndex].count = myCart[index].list[innerIndex].count + 1
    this.setState({
      myCart
    })
  }

  //删除
  handleDelete(index, innerIndex) {
    let { myCart } = this.state
    myCart[index].list.splice(innerIndex, 1)
    if(myCart[index].list.length === 0) {
      myCart.splice(index, 1)
    }
    this.setState({
      myCart
    })
    this.cartCount(myCart)
  }

  //计算购物里商品的数量
  cartCount(myCart) {
    let count = 0
    for (let i = 0; i < myCart.length; i++) {
      count = count + myCart[i].list.length
    }

    this.props.onSetCount(count)
  }

  //计算总价和总数
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

  componentDidUpdate() {
    let { myCart } = this.state
    localStorage.setItem('mycart', JSON.stringify(myCart))
  }

  componentDidMount() {
    let myCart = JSON.parse(localStorage.getItem('mycart')) ? JSON.parse(localStorage.getItem('mycart')) : []
    this.setState({
      myCart
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
            <Checkbox className="m-cart-group-checkbox" checked={item.checked} onChange={this.handleGroup.bind(this, index)}>{item.categoryName}</Checkbox>
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
                  <span className="m-delete-btn" onClick={this.handleDelete.bind(this, index, innerIndex)} >删除</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCount(count) {
      dispatch({type: 'SET_COUNT', count})
    }
  }
}
export default connect(null,mapDispatchToProps)(Cart)