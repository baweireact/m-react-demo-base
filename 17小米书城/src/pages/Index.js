import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header.js'
import List from '../components/List.js'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
      currentIndex: 0
    }
  }

  handleClickNav(index) {
    this.setState({
      currentIndex: index
    })
  }

  componentDidMount() {
    axios({
      url: '/book_mall',
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          bookList: res.data.data
        })
        console.log(res.data.data)
      }
    })
  }

  render() {
    let {
      bookList,
      currentIndex,
    } = this.state
    return (
      <div>
        <Header list={bookList} onClickNav={this.handleClickNav.bind(this)}></Header>
        <List list={bookList} currentIndex={currentIndex}></List>
      </div>
    )
  }
}
