import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      let { count } = this.state
      count = count + 1
      this.setState({
        count
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    let {
      count
    } = this.state
    return (
      <div>
        {count}
      </div>
    )
  }
}
