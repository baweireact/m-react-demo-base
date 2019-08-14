import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import {message} from 'antd'
import './index.css'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currenIndex: 0,
      detail: {}
    }
  }

  handleNav(currenIndex) {
    this.setState({
      currenIndex
    })
  }

  handleAddToMyBook(book) {
    let {detail} = this.state
    let myBook = localStorage.getItem('mybook')
    myBook = JSON.parse(myBook)
    if (!myBook) {
      myBook = []
    }
    myBook.push(book)
    localStorage.setItem('mybook', JSON.stringify(myBook)) 
    message.info('添加成功')
    detail.is_in_my_book = false
    this.setState({
      detail
    })
  }

  componentDidMount() {
    console.log(this.props.match)
    let { id } = this.props.match.params
    axios({
      url: `/book_detail?id=${id}`,
      method: 'get'
    }).then((res) => {
      console.log(res.data)
      if (res.data.code === 200) {

        let myBook = localStorage.getItem('mybook')
        myBook = JSON.parse(myBook) ? JSON.parse(myBook) : []
        let detail = res.data.data
        if (myBook.find(item => item.id === detail.id)) {
          detail.is_in_my_book = false
        } else {
          detail.is_in_my_book = true
        }
        this.setState({
          detail
        })
      }
    })
  }
  
  render() {
    let {
      currenIndex,
      detail
    } = this.state
    return (
      <div>
        <div>
          <Link to="/index" className="m-back">返回</Link>
        </div>
        <div className="m-list-item">
          <img className="m-list-item-img" src={detail.avatar} alt={detail.title}></img>
          <div className="m-list-content">
            <div className="m-list-title">{detail.title}</div>
            <div>
              {
                detail.tags && detail.tags.map((item, index) => (
                  <span key={index} className="m-list-tag">{item}</span>
                ))}
            </div>
            <div className="m-list-summary">
              {detail.summary}
            </div>
            <div>
              {
                detail.is_in_my_book
                ? <span className="m-add-btn active" onClick={this.handleAddToMyBook.bind(this, detail)}>加入书架</span>
                : <span className="m-add-btn">已在书架</span>
              }
            </div>
          </div>
        </div>
        <div>
          <div className="m-book-detail-nav">
            <span
              className={"m-book-detail-nav-item " + (currenIndex === 0 ? 'active' : '')}
              onClick={this.handleNav.bind(this, 0)}>作品信息</span>
            <span
              className={"m-book-detail-nav-item " + (currenIndex === 1 ? 'active' : '')}
              onClick={this.handleNav.bind(this, 1)}>目录</span>
            <span
              className={"m-book-detail-nav-item " + (currenIndex === 2 ? 'active' : '')}
              onClick={this.handleNav.bind(this, 2)}>作品讨论</span>
          </div>
          <div>
            <div className={"m-book-detail-content " + (currenIndex === 0 ? 'active' : '')}>
              {detail.summary}
            </div>
            <div className={"m-book-detail-content " + (currenIndex === 1 ? 'active' : '')}>
              目录
            </div>
            <div className={"m-book-detail-content " + (currenIndex === 2 ? 'active' : '')}>
              作品讨论
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(Detail)