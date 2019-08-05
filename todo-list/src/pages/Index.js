import React, {Component} from 'react'
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

  handleEnter(e) {
    if (e.keyCode === 13) {
      let {text, list} = this.state
      list.push({
        id: (new Date()).getTime(),
        text,
        checked: false,
      })
      this.setState({
        list,
        text: ''
      })
    }
  }

  handleUpdateList(id, checked) {
    let {list} = this.state
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].checked = checked
      }
    }
    this.setState({
      list
    })
  }

  handleDelete(id) {
    let {list} = this.state
    let newList = list.filter(item => item.id !== id)
    this.setState({
      list: newList
    })
  }

  componentDidUpdate() {
    let {list} = this.state
    localStorage.setItem('list', JSON.stringify(list))
  }

  componentDidMount() {
    let list = JSON.parse(localStorage.getItem('list')) || []
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
        <input type="text" value={text} onChange={this.handleInput.bind(this, 'text')} onKeyDown={this.handleEnter.bind(this)}></input>
        <div>全部({list.length})：</div>
        <List list={list} checked="all" onUpdateList={this.handleUpdateList.bind(this)} onDelete={this.handleDelete.bind(this)}></List>
        <div>正在进行({list.filter(item => item.checked === false).length})：</div>
        <List list={list} checked={false} onUpdateList={this.handleUpdateList.bind(this)} onDelete={this.handleDelete.bind(this)}></List>
        <div>已经完成({list.filter(item => item.checked === true).length})：</div>
        <List list={list} checked={true} onUpdateList={this.handleUpdateList.bind(this)} onDelete={this.handleDelete.bind(this)}></List>
      </div>
    )
  }
}

export default Index