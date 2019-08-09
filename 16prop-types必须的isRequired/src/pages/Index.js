import React, {Component} from 'react'
import Count from '../components/Count'


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
        <Count count={count}></Count>
        <button onClick={this.handleAdd.bind(this)}>加</button>
      </div>
    );
  }
}

export default Index