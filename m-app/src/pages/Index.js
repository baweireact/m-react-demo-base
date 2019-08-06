import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      name: '',
    }
  }
  render() {
    let {
      text,
      name,
    } = this.state
    return (
      <div>
        1
      </div>
    )
  }
}

export default Index