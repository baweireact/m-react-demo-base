import React, { Component } from 'react'
import NumberButton from '../components/NumberButton.js'
import OperateButton from '../components/OperateButton.js'
import './index.css'

let historyNumber, currentNumber, shouldUpdateCurrent = true, operateType, shouldClear = false
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  //受控组件
  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  //点击数字
  handleNumberClick(number) {
    let { text } = this.state
    if (shouldClear) {
      text = number
      shouldClear = false
    } else {
      text = text + '' + number
    }

    this.setState({
      text,
    })
  }

  //清空
  handleClear() {
    this.setState({
      text: ''
    })
    historyNumber = null
    currentNumber = null
    shouldUpdateCurrent = true
    operateType = null
    shouldClear = false
  }

  //删除一个字符
  handleBackspace() {
    let { text } = this.state
    text = text.slice(0, text.length - 1)
    this.setState({
      text
    })
  }

  //点击加减乘除
  handleOperateButtonClick(operate) {
    let { text } = this.state
    historyNumber = text
    operateType = operate
    shouldClear = true
    shouldUpdateCurrent = true
  }

  //点击等号
  handleEqual() {
    let { text } = this.state
    if (shouldUpdateCurrent) {
      currentNumber = text
      shouldUpdateCurrent = false
    }
    this.compute()
  }

  //点击等号时会计算
  compute() {
    let text
    switch (operateType) {
      case '+':
        text = Number(historyNumber) + Number(currentNumber)
        break
      case '-':
        text = Number(historyNumber) - Number(currentNumber)
        break
      case 'x':
        text = Number(historyNumber) * Number(currentNumber)
        break
      case '/':
        text = Number(historyNumber) / Number(currentNumber)
        break
      default:
    }

    this.setState({
      text: text + ''
    })
    historyNumber = text
  }

  render() {
    let {
      text
    } = this.state
    let numberButtonArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']
    let operateButtonArr = ['+', '-', 'x', '/']
    return (
      <div className="m-wrap">
        <div className="m-input-wrap">
          <input className="m-input" type="text" value={text} onChange={this.handleInput.bind(this, 'text')}></input>
        </div>
        <div className="m-control-wrap">
          <button className="m-control-btn" onClick={this.handleClear.bind(this)}>C</button>
          <button className="m-control-btn" onClick={this.handleBackspace.bind(this)}>Backspace</button>
        </div>
        <div className="m-number-wrap">
          {
            numberButtonArr.map((item, Index) => (
              <NumberButton key={Index} text={item} onNumberButtonClick={this.handleNumberClick.bind(this)}></NumberButton>
            ))
          }
        </div>
        <div className="m-number-wrap">
          {
            operateButtonArr.map((item, index) => (
              <OperateButton key={index} text={item} onOperateButtonClick={this.handleOperateButtonClick.bind(this)}></OperateButton>
            ))
          }
        </div>
        <div className="m-number-wrap">
          <button className="m-equal-btn" onClick={this.handleEqual.bind(this)}>=</button>
        </div>
      </div>
    )
  }
}

export default Index