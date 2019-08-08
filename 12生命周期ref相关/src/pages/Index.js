import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
  }

  handleWarpClick(e) {
    console.log(e)
    console.log('外部的')
  }

  handleBtn(e) {
    console.log(this)
    console.log(e)
    e.stopPropagation()
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
    console.log('内部的')
  }

  render() {
    return (
      <div onClick={this.handleWarpClick.bind(this)}>
        <button onClick={this.handleBtn.bind(this)}>按钮</button>
        <a href="http://www.baidu.com" onClick={this.handleBtn} target="_blank">百度</a>
      </div>
    )
  }
}

export default Index