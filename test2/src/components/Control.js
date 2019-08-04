import React, {Component} from 'react'

class Control extends Component {
  constructor(props) {
    super(props)
  }
  handleAdd() {
    this.props.onAdd()
  }
  handleSub () {
    this.props.onSub()
  }
  render() {
    let {name} = this.props
    return (
      <div>
        <div>{name}</div>
        <button onClick={this.handleAdd.bind(this)}>加</button>
        <button onClick={this.handleSub.bind(this)}>减</button>
      </div>
    )
  }
}

export default Control