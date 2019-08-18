import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/task/actionCreator'

class Detail extends Component {

  handleAdd() {
    let { detail } = this.props
    this.props.onDispatch(actionCreator.addToMyBook(detail, this.getDetail.bind(this)))
  }

  getDetail() {
    let { currentIndex, id } = this.props.match.params
    this.props.onDispatch(actionCreator.getBookDetail(currentIndex, id))
  }

  componentDidMount() {
    this.getDetail()
  }

  render() {
    let { detail } = this.props
    return (
      <div>
        <img src={detail.avatar} alt={detail.title}></img>
        <div>
          {
            detail.is_in_my_book
              ? <span className="m-book-add-to-my-book-btn-disabled">已在书架</span>
              : <span className="m-book-add-to-my-book-btn" onClick={this.handleAdd.bind(this, detail)}>加入书架</span>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.task.currentIndex,
    detail: state.task.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail)
