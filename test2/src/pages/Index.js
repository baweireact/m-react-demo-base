import React, {Component} from 'react'
import Control from '../components/Control.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: 'xu',
    }
  }

  handleAdd(step) {
    let {
      count,
    } = this.state
    count = count + step
    this.setState({
      count
    })
  }

  handleSub(step) {
    let {
      count,
    } = this.state
    count = count - step
    this.setState({
      count
    })
  }

  handleUpdateName() {
    this.setState({
      name: 'tongbao'
    })
  }

  render() {
    let {
      count,
      name,
    } = this.state
    return (
      <div>
        <div>{count}</div>
        <div>
          <button onClick={this.handleUpdateName.bind(this)}>改变name</button>
        </div>
        <Control name={name} onAdd={this.handleAdd.bind(this, 9)} onSub={this.handleSub.bind(this, 1)}></Control>
      </div>
    )
  }
}

export default Index