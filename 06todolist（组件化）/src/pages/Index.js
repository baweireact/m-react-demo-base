import React, { Component } from 'react'
import List from '../components/List.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: [],
    }
  }

  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleInputEnter(e) {
    if (e.keyCode === 13) {
      let {
        text,
        list,
      } = this.state

      list.push({
        id: (new Date()).getTime(),
        text,
        checked: false,
      })
      this.setState({
        list,
        text: '',
      })
    }
  }

  handleUpdateList(id, checked) {
    let { list } = this.state
    for (let i = 0; i < list.length; i ++) {
      if (list[i].id === id) {
        list[i].checked = checked
      }
    }
    this.setState({
      list
    })
  }

  render() {
    let {
      text,
      list,
    } = this.state
    return (
      <div>
        <div>
          <input type='text' value={text} onKeyDown={this.handleInputEnter.bind(this)} onChange={this.handleInput.bind(this, 'text')}></input>
        </div>
        <div>
          全部({list.length})
          <List list={list} checked="all" onUpdateList={this.handleUpdateList.bind(this)}></List>
        </div>
        <div>
          正在进行({list.filter(item => item.checked === false).length}):
        </div>
        <List list={list} checked={false} onUpdateList={this.handleUpdateList.bind(this)}></List>
        <div>
          已经完成({list.filter(item => item.checked).length}):
        </div>
        <List list={list} checked={true} onUpdateList={this.handleUpdateList.bind(this)}></List>
      </div>
    )
  }
}

export default Index