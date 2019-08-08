import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header.js'
import List from '../components/List.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentIndex: 0,
    }
  }

  handleClickNav(index) {
    this.setState({
      currentIndex: index
    })
  }

  componentDidMount() {
    axios({
      url: '/list',
      method: 'get'
    }).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data.list
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
        <Header list={list} onClickNav={this.handleClickNav.bind(this)}></Header>
        <List list={list} currentIndex={currentIndex}></List>
      </div>
    )
  }
}

export default Index