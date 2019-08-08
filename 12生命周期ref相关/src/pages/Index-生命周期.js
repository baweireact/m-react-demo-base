import React, { Component } from 'react'
import ScrollingList from '../components/ScrollingList.js'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }

  handleAdd() {
    let {list} = this.state
    list.unshift({
      id: (new Date()).getTime(),
      text: 'xu' + (new Date()).getTime(),
    })
    this.setState({
      list
    })
  }
  render() {
    let {
      list
    } = this.state
    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>加</button>
        <ScrollingList list={list}></ScrollingList>
      </div>
    );
  }
}

export default Index