import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import Right from '../components/Right'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentIndex: 0
    }
  }

  handleNav(currentIndex) {
    this.setState({
      currentIndex
    })
  }

  componentDidMount() {
    axios({
      url: '/list',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data
        })
      }
    })
  }
  render() {
    let { list, currentIndex } = this.state
    return (
      <div className="m-main">
        <div className="m-index">
          <Sidebar list={list} currentIndex={currentIndex} onNav={this.handleNav.bind(this)}></Sidebar>
          <Right list={list} currentIndex={currentIndex}></Right>
        </div>
      </div>
    )
  }
}
