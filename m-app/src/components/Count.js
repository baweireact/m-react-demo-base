import React, {Component} from 'react'

class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  static getDerivedStateFromProps(props, state) {
    return {
      count: props.count
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
    let { count } = this.state
    return (
      <div>
        {count}
        <button onClick={this.handleAdd.bind(this)}>子组件加按钮</button>
      </div>
    )
  }
}

export default Count