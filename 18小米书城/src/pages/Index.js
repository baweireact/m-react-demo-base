import React, { Component } from 'react'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars'
import IndexHeader from '../components/IndexHeader.js'
import {message} from 'antd'
import List from '../components/List.js'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookList: []
    }
  }

  setBookStatus(bookList) {
    let myBook = localStorage.getItem('mybook')
    myBook = JSON.parse(myBook) ? JSON.parse(myBook) : []
    for (let i = 0; i < bookList.length; i++) {
      if (myBook.find(item => item.id === bookList[i].id)) {
        bookList[i].is_in_my_book = false
      } else {
        bookList[i].is_in_my_book = true
      }
    }
    this.setState({
      bookList
    })
  }

  handleClickNav(index) {
    axios({
      url: `/book_mall?id=${index}`,
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        let bookList = res.data.data.list
        this.setBookStatus(bookList)
      }
    })
  }

  handleAddToMyBook(book) {
    let {bookList} = this.state
    let myBook = localStorage.getItem('mybook')
    myBook = JSON.parse(myBook)
    if (!myBook) {
      myBook = []
    }
    myBook.push(book)
    localStorage.setItem('mybook', JSON.stringify(myBook)) 
    message.info('添加成功')
    this.setBookStatus(bookList)
  }

  componentDidMount() {
    axios({
      url: '/book_mall?id=0',
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        let bookList = res.data.data.list
        this.setBookStatus(bookList)
      }
    })
  }

  render() {
    let {
      bookList,
    } = this.state
    return (
      <div className="m-page-content">
        <IndexHeader onClickNav={this.handleClickNav.bind(this)}></IndexHeader>
        <Scrollbars>
          <List list={bookList} onAddToMyBook={this.handleAddToMyBook.bind(this)}></List>
        </Scrollbars>
      </div>
    )
  }
}
