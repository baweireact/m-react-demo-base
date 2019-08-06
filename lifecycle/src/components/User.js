import React, {Component} from 'react'

class User extends Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('性能优化')
    this.setState({
      count: 1
    })
    // if (nextProps.name === this.props.name) {
    //   return false
    // } else {
    //   return true
    // }

    return true
  }

  componentWillUpdate() {
    console.log('更新前')
  }

  componentWillReceiveProps(nextProps) {
    console.log('接收新的 props 之前被调用')
    // console.log(this.props)
    // console.log(nextProps)
  }

  render() {
    let {name} = this.props
    let {count} = this.state
    console.log('渲染子组件')
    return (
      <div>
        {name}, {count}
        <button onClick={this.handleAdd.bind(this)}>加（子组件）</button>
      </div>
    )
  }
}

export default User