import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import actionCreator from '../store/task/actionCreator'

class RightContent extends Component {

  handleDetail(id) {
    this.props.history.push('/category_list/' + id)
  }

  componentDidMount() {
    let { id } = this.props
    this.props.onDispatch(actionCreator.getRightList(id))
  }
  render() {
    let { rightList } = this.props
    let rightListDom
    if (typeof rightList.id !== 'undefined') {
      rightListDom = rightList.list.map(item => (
        <span className="m-right-link" key={item.id} onClick={this.handleDetail.bind(this, item.id)}>{item.title}</span>
      ))
    }

    return (
      <div className="m-right-content">
        <img src={rightList.banner} className="m-banner"></img>
        {rightListDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rightList: state.task.rightList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RightContent))
