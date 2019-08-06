import React, {Component} from 'react'
import './index.css'

class NumberButton extends Component {
  handleOperateClick(text) {
    this.props.onOperateButtonClick(text)
  }

  render() {
    let {
      text,
    } = this.props
    return(
      <button className="m-btn" onClick={this.handleOperateClick.bind(this, text)}>{text}</button>
    )
  }
}
export default NumberButton