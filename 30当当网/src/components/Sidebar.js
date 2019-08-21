import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import actionCreator from '../store/task/actionCreator'

class Sidebar extends Component {
  componentDidMount() {
    this.props.onDispatch(actionCreator.getSidebarList())
  }

  render() {
    let { sidebarList } = this.props
    let sidebarListDom = sidebarList.map(item => (
      <NavLink key={item.id} className="m-sidebar-nav-item" to={'/category/' + item.url}>{item.title}</NavLink>
    ))
    return (
      <div className="m-sidebar">
        {sidebarListDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sidebarList: state.task.sidebarList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
