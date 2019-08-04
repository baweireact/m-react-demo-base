import React, {Component} from 'react'

class Control extends Component {
  handleAdd() {
    this.props.onAdd()
  }

  render() {
    let {name} = this.props
    return (
      <div>
        {name}
        <button onClick={this.handleAdd.bind(this)}>加</button>
      </div>
    )
  }
}

export default Control