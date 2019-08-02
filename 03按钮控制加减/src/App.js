import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd() {
    let {count} = this.state
    count = count + 1
    this.setState({
      count
    })
  }

  handleSub() {
    let {count} = this.state
    count = count - 1
    this.setState({
      count
    })
  }

  render() {
    let {
      count
    } = this.state
    return (
      <div>
        {count}
        <div>
          <button onClick={this.handleAdd.bind(this)}>加</button>
          <button onClick={this.handleSub.bind(this)}>减</button>
        </div>
      </div>
    )
  }
}
