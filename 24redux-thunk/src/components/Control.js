import React, { Component } from 'react'
import { connect } from 'react-redux'

class Control extends Component {
  handleSub() {
    let { count } = this.props
    count = count - 1
    this.props.onSetState('count', count)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSub.bind(this)}>减</button>
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
      dispatch({ type: 'SET_STATE', key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)