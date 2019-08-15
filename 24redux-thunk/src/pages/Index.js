import React, { Component } from 'react'
import {connect} from 'react-redux'
import taskActionCreator from '../store/task/actionCreator'
import Control from "../components/Control"

class Index extends Component {
  handAdd() {
    let {count} = this.props
    count = count + 1
    this.props.onSetState('count', count)
  }

  componentDidMount() {
    this.props.onGetCount()
  }

  render() {
    let {count} = this.props
    return (
      <div>
        {count}
        <div>
          <button onClick={this.handAdd.bind(this)}>加</button>
        </div>
        <div>
          <Control></Control>
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
      dispatch({type: 'SET_STATE',key, value})
    },
    onGetCount() {
      dispatch(taskActionCreator.getCount())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
