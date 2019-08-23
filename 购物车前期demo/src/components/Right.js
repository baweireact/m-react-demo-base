import React, { Component } from 'react'

export default class Right extends Component {
  handleSub(index) {
    this.props.onSub(index)
  }
  handleAdd(index) {
    this.props.onAdd(index)
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
              <span 
                className={"m-order-sub-btn " + (item.count >= 1 ? 'active' : '')}
                onClick={this.handleSub.bind(this, index)}>-</span>
              <span 
                className={"m-order-count " + (item.count >= 1 ? 'active' : '')}>{item.count}</span>
              <span className="m-order-add-btn" onClick={this.handleAdd.bind(this, index)}>+</span>
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
