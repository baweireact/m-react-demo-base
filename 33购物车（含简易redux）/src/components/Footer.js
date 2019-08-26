import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Footer extends Component {

  //计算购物里商品的数量
  cartCount() {
    let myCart = JSON.parse(localStorage.getItem('mycart')) ? JSON.parse(localStorage.getItem('mycart')) : []
    let count = 0
    for (let i = 0; i < myCart.length; i++) {
      count = count + myCart[i].list.length
    }

    this.props.onSetCount(count)
  }
  componentDidMount() {
    this.cartCount()
  }
  render() {
    let { count } = this.props
    return (
      <div className="m-footer">
        <NavLink to="/index" className="m-footer-nav-item">首页</NavLink>
        <NavLink to="/cart" className="m-footer-nav-item">
          <span className="m-footer-nav-cart">
            <span className={"m-cart-count " + (count > 0 ? 'active' : '')}>{count}</span>
            购物车
          </span></NavLink>
        <NavLink to="/me" className="m-footer-nav-item">我的</NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCount(count) {
      dispatch({ type: 'SET_COUNT', count })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
