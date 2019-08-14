import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    let {item} = this.props
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
            <span className="m-detail-btn">书籍详情</span>
          </div>
        </div>
      </div>
    )
  }
}
