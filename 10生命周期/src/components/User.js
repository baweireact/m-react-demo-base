import React, {Component} from 'react'
import PropTypes from 'prop-types';

let historyName = ''
class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // getDefaultProps() {
  //   return {
  //     name1: 'xu'
  //   }
  // }

  // getInitialState() {
  //   return {
  //     count: 10
  //   }
  // }

  handleAdd() {
    let {count} = this.state
    count = count + 1
    this.setState({
      count
    })
  }

  static getDerivedStateFromProps(props, state){
    console.log(props, state)
    if (props.name === 'xu') {
      return {
        count : 10
      }
    } else {
      return state
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate 性能优化:')
  //   console.log(nextProps, nextState)
  //   if (nextProps.name === historyName) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('监听props变化：')
  //   console.log(nextProps)
  // }

  // componentWillUpdate() {
  //   console.log('更新前')
  // }

  componentDidUpdate() {
    console.log('更新后')
  }

  render() {
    console.log('子组件渲染render函数')
    let {
      name,
      name2,
    } = this.props
    let {
      count,
    } = this.state
    historyName = name
    return (
      <div>
        {name},{count}, {name2}
        <button onClick={this.handleAdd.bind(this)}>加</button>
      </div>
    )
  }
}

User.defaultProps = {
  name2: 'xu'
}

User.propTypes = {
  name: PropTypes.string
};

export default User