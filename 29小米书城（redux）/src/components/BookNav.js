import React, { Component } from 'react'
import { connect } from "react-redux"
import actionTypes from '../store/task/actionTypes'
import actionCreator from '../store/task/actionCreator'

class BookNav extends Component {
  handleNav(id) {
    this.props.onSetState('currentIndex', id)
    this.props.onDispatch(actionCreator.getBookList(id))
  }
  componentDidMount() {
    let { currentIndex } = this.props
    this.props.onDispatch(actionCreator.getBookNav())
    this.props.onDispatch(actionCreator.getBookList(currentIndex))
  }
  render() {
    let { bookNav, currentIndex } = this.props
    let bookNavDom = bookNav.map(item => (
      <span key={item.id}
        className={"m-book-nav-item " + (currentIndex === item.id ? 'active' : '')}
        onClick={this.handleNav.bind(this, item.id)}>{item.title}</span>
    ))
    return (
      <div className="m-book-nav">
        {bookNavDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.task.currentIndex,
    bookNav: state.task.bookNav,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    },
    onSetState(key, value) {
      dispatch({ type: actionTypes.SET_STATE, key, value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookNav)
