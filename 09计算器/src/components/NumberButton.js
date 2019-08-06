import React, {Component} from 'react'
import './index.css'

class NumberButton extends Component {
  handleNumberClick(text) {
    this.props.onNumberButtonClick(text)
  }

  render() {
    let {
      text,
    } = this.props
    return(
      <button className="m-btn" onClick={this.handleNumberClick.bind(this, text)}>{text}</button>
    )
  }
}
export default NumberButton