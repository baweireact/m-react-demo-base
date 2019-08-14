import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {message} from 'antd'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }
  handleDetail(id) {
    this.props.history.push(`/detail/${id}`)
  }

  handleAddToMyBook(book) {
    this.props.onAddToMyBook(book)
  }

  render() {
    let {
      item
    } = this.props
    return (
      <div className="m-list-item">
        <img className="m-list-item-img" src={item.avatar} alt={item.title}></img>
        <div className="m-list-content">
          <div className="m-list-title">{item.title}</div>
          <div>
            {
              item.tags.map((item, index) => (
                <span key={index} className="m-list-tag">{item}</span>
              ))}
          </div>
          <div className="m-list-summary">
            {item.summary}
          </div>
          <div>
            <span className="m-detail-btn" onClick={this.handleDetail.bind(this, item.id)}>书籍详情</span>
            {
              item.is_in_my_book
              ? <span className="m-add-btn active" onClick={this.handleAddToMyBook.bind(this, item)}>加入书架</span>
              : <span className="m-add-btn">已在书架</span>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ListItem)
