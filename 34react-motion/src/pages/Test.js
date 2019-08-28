import React, { Component } from 'react'
import {Motion, spring, presets} from 'react-motion'

export default class Test extends Component {
  state = {
    top: 30,
    left: 0
  }

  clickHandler() {
    this.setState({
      top: 100,
      left: 300
    })
  }

  clickHandlerBack() {
    this.setState({
      top: 30,
      left: 0
    })
  }

  render() {

    return (
      <div className="container">
        <Motion style={{ top: spring(this.state.top, presets.wobbly), left: spring(this.state.left, presets.wobbly) }}>
          {interpolatingStyle => {
            // debugger
            return (
              <div style={{ 
                top: `${interpolatingStyle.top}px`,
                left: `${interpolatingStyle.left}px`
                }} className='box'></div>
            )
          }}
        </Motion>
        <button onClick={this.clickHandler.bind(this)}>run</button>
        <button onClick={this.clickHandlerBack.bind(this)}>run2</button>
      </div>
    )
  }
}
