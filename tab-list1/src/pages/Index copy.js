import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header.js'
import List from '../components/List.js'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentIndex: 0
    }
  }

  handleNavClick(index) {
    this.setState({
      currentIndex: index
    })
  }

  componentDidMount() {
    axios({
      url: '/list',
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data
        })
      }
    })
  }

  render() { 
    let {
      list,
      currentIndex,
    } = this.state
    return (
      <div>
        <Header list={list} currentIndex={currentIndex} onNavClick={this.handleNavClick.bind(this)}></Header>
        <List list={list} currentIndex={currentIndex}></List>
      </div>
    )
  }
}
