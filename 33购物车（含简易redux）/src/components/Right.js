import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import { connect } from 'react-redux'
import Fly from './Fly'

class Right extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      currentItem: {},
      runFlyCount: 0,
      flyImg: '',
    }
  }

  //减
  handleSub() {
    let { currentItem } = this.state
    if (currentItem.count > 1) {
      currentItem.count = currentItem.count - 1
      this.setState({
        currentItem
      })
    }
  }

  //加
  handleAdd() {
    let { currentItem } = this.state
    currentItem.count = currentItem.count + 1
    this.setState({
      currentItem
    })
  }

  //显示对话框
  showAddModal(currentItem) {
    currentItem.count = 1
    this.setState({
      visible: true,
      currentItem
    })
  }

  //隐藏对话框
  handleHideModal() {
    this.setState({
      visible: false
    })
  }

  //加入购物车
  handleAddToMyCart() {
    this.addToMyCart()
    this.handleHideModal()
    this.cartFly()
  }

  //加入购物车的动画
  cartFly() {
    let { runFlyCount, currentItem } = this.state
    runFlyCount = runFlyCount + 1
    this.setState({
      runFlyCount,
      flyImg: currentItem.bigImageUrl
    })
  }

  //计算购物里商品的数量
  cartCount(myCart) {
    let count = 0
    for (let i = 0; i < myCart.length; i++) {
      count = count + myCart[i].list.length
    }
    
    setTimeout(() => {
      this.props.onSetCount(count)
    }, 600)
  }

  //加入购物主体代码
  addToMyCart() {
    let { list, currentIndex } = this.props
    let { currentItem } = this.state
    let myCart = JSON.parse(localStorage.getItem('mycart')) ? JSON.parse(localStorage.getItem('mycart')) : []

    let categoryIndex = myCart.findIndex(item => item.categoryName === list[currentIndex].categoryName)

    //该分类是否在购物车
    if (categoryIndex >= 0) {
      //该分类在购物车
      let listIndex = myCart[categoryIndex].list.findIndex(item => item.spuId === currentItem.spuId)

      //该商品是否在购物车
      if (listIndex >= 0) {
        //若该商品已在购物车，则把数量加以上即可
        myCart[categoryIndex].list[listIndex].checked = true
        myCart[categoryIndex].list[listIndex].count = myCart[categoryIndex].list[listIndex].count + currentItem.count
      } else {
        //若该商品并不在购物车，则把昌平添加到购物车
        currentItem.checked = true
        myCart[categoryIndex].list.push(currentItem)
      }

      //列表选中的个数
      let listCheckedCount = 0
      for (let i = 0; i < myCart[categoryIndex].list.length; i++) {
        if (myCart[categoryIndex].list[i].checked) {
          listCheckedCount++
        }
      }

      //设置组是否选中
      myCart[categoryIndex].checked = listCheckedCount === myCart[categoryIndex].list.length
    } else {
      //该分类不在购物车
      currentItem.checked = true
      let temp = {
        checked: true,
        categoryName: list[currentIndex].categoryName,
        list: [currentItem]
      }
      myCart.push(temp)
    }

    localStorage.setItem('mycart', JSON.stringify(myCart))
    this.cartCount(myCart)
  }

  render() {
    let { list, currentIndex } = this.props
    let { visible, currentItem, runFlyCount, flyImg } = this.state

    let listDom
    if (list.length > 0) {
      listDom = list[currentIndex].spuList.map(item => (
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
        <Fly runFlyCount={runFlyCount} flyImg={flyImg}></Fly>
        <Modal
          title="加入购物车"
          visible={visible}
          onOk={this.handleAddToMyCart.bind(this)}
          onCancel={this.handleHideModal.bind(this)}>
          <div className="m-right-order-wrap">
            <span className="m-order-sub-btn" onClick={this.handleSub.bind(this)}>-</span>
            <span className="m-order-count">{currentItem.count}</span>
            <span className="m-order-add-btn" onClick={this.handleAdd.bind(this)}>+</span>
          </div>
        </Modal>
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

export default connect(null, mapDispatchToProps)(Right)
