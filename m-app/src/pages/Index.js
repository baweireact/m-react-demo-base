import React, {Component} from 'react'
import List from '../components/List'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: []
    }
  }

  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleInputKeyDown(e) {
    let {text,list} = this.state
    if (e.keyCode === 13) {
      list.push({
        id: (new Date()).getTime(),
        text,
        checked: false,
      })
      this.setState({
        text: '',
        list,
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
    list = list.filter(item => item.id !== id)
    this.setState({
      list
    })
  }

  componentDidMount() {
    let list = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []
    this.setState({
      list
    })
  }

  componentDidUpdate() {
    let {list} = this.state
    localStorage.setItem('list', JSON.stringify(list))
  }

  render() {
    let {
      text,
      list,
    } = this.state
    return (
      <div>
        <input type="text" value={text} onChange={this.handleInput.bind(this, 'text')} onKeyDown={this.handleInputKeyDown.bind(this)}></input>
        <div>全部数据({list.length})：</div>
        <List list={list} checked="all" onUpdateList={this.handleUpdateList.bind(this)} onDelete={this.handleDelete.bind(this)}></List>
        <div>正在进行({list.filter(item => item.checked === false).length})：</div>
        <List list={list} checked={false} onUpdateList={this.handleUpdateList.bind(this)} onDelete={this.handleDelete.bind(this)}></List>
        <div>已经完成({list.filter(item => item.checked).length})：</div>
        <List list={list} checked={true} onUpdateList={this.handleUpdateList.bind(this)} onDelete={this.handleDelete.bind(this)}></List>
      </div>
    )
  }
}

export default Index