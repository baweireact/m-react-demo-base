import React, {Component} from 'react'

class Control extends Component {
  constructor(props) {
    super(props)
  }
  handleAdd() {
    this.props.onAdd()
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>加</button>
      </div>
    )
  }
}

export default Control