import React, { Component } from 'react'
import {connect} from 'react-redux'
import actionTypes from '../store/task/actionTypes.js'
import './index.css'

class Index extends Component {
  handleAdd() {
    let {count} = this.props
    count = count + 1
    this.props.onSetState('count', count)
  }
  handleSub() {
    let {count} = this.props
    count = count - 1
    this.props.onSetState('count', count)
  }
  handleChangeName() {
    this.props.onSetState('name', '徐')
  }
  render() {
    let {count, name} = this.props
    return (
      <div>
        <div className="m-count">
          {count}, {name}
        </div>
        <div>
          <button onClick={this.handleAdd.bind(this)}>加</button>
          <button onClick={this.handleSub.bind(this)}>减</button>
          <button onClick={this.handleChangeName.bind(this)}>改名</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.task.count,
    name: state.task.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: actionTypes.SET_STATE, key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)