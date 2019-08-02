import React, {Component} from 'react'
import Control from '../components/Control.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd() {
    let {count} = this.state
    count = count + 1
    this.setState({
      count
    })
  }

  render() {
    let {count} = this.state
    return (
      <div>
        <div>{count}</div>
        <div>
          <Control onAdd={this.handleAdd.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Index