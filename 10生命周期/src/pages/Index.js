import React, { Component } from 'react'
import User from '../components/User.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      name: '',
    }
  }

  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleUpdateName() {
    let {text} = this.state
    this.setState({
      name: text
    })
  }

  componentDidMount() {
    console.log('挂载后，可以获取真实dom')
    let dom = document.getElementById('m-test')
    console.log(dom)
  }
  render() {
    let {
      text,
      name,
    } = this.state
    return (
      <div>
        1
        <span id="m-test">1</span>
        <div>
          <input type="text" value={text} onChange={this.handleInput.bind(this, 'text')}></input>
          <button onClick={this.handleUpdateName.bind(this)}>修改name</button>
        </div>
        <div>
          <User name={name}></User>
        </div>
      </div>
    )
  }
}

export default Index