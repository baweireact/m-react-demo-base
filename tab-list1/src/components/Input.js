import React, {Component} from 'react'

class Input extends Component {
  render() {
    return (
      <div>
        <input ref={this.props.onRef.bind(this)}/>
      </div>
    )
  }
}

export default Input