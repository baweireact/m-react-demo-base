import React, { Component } from 'react'
import {connect} from 'react-redux'
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


  render() {
    let {count} = this.props
    return (
      <div>
        <div className="m-count">{count}</div>
        <div>
          <button onClick={this.handleAdd.bind(this)}>加</button>
          <button onClick={this.handleSub.bind(this)}>减</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.task.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: 'SET_STATE', key, value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)