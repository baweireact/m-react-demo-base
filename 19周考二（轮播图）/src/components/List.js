import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

class List extends Component {
  handleToDetail(id) {
    this.props.history.push('/detail/' + id)
  }

  render() {
    let {contentList} = this.props
    let contentListDom = contentList.map((item) => (
      <div className="m-list-item" key={item.id} onClick={this.handleToDetail.bind(this, item.id)}>
        <div className="m-list-content">
          <div className="m-list-title">{item.title}</div>
          <div>
            <img className="m-list-author-img" src={item.author} alt={item.name}></img>
            <span className="m-list-author-name">{item.name}</span>
            <span className="m-list-address-prefix">在</span>
            <span className="m-list-address">{item.address}</span>
          </div>
          <div>
            <span>浏览:{item.look}</span>
            <span> 评论:{item.message}</span>
          </div>
        </div>
        <img className="m-list-img" src={item.image} alt={item.address}></img>
      </div>
    ))
    return (
      <div>
        {contentListDom}
      </div>
    )
  }
}

export default withRouter(List)
