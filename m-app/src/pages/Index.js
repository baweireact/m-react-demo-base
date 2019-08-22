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

  handleSub(index) {
    let { currentIndex, list } = this.state
    list[currentIndex].spuList[index].count = list[currentIndex].spuList[index].count - 1
    this.setState({
      list
    })
  }

  handleAdd(index) {
    let { currentIndex, list } = this.state
    list[currentIndex].spuList[index].count = list[currentIndex].spuList[index].count + 1
    this.setState({
      list
    })
  }

  componentDidUpdate() {
    let { list } = this.state
    localStorage.setItem('cart', JSON.stringify(list))
  }

  componentDidMount() {
    axios({
      url: '/list',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        let list = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : res.data.data
        if (!JSON.parse(localStorage.getItem('cart'))) {
          for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].spuList.length; j++) {
              list[i].spuList[j].count = 0
            }
          }
        }

        this.setState({
          list
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
          <Right 
            list={list} 
            currentIndex={currentIndex} 
            onSub={this.handleSub.bind(this)}
            onAdd={this.handleAdd.bind(this)}
            ></Right>
        </div>
      </div>
    )
  }
}
