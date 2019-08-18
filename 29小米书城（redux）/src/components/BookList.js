import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import actionCreator from '../store/task/actionCreator' 

class BookList extends Component {
  handleDetail(id) {
    let {currentIndex} = this.props
    this.props.history.push(`/detail/${currentIndex}/${id}`)
  }
  updateBookList() {
    let { currentIndex } = this.props
    this.props.onDispatch(actionCreator.getBookList(currentIndex))
  }
  handleAdd(book) {
    
    this.props.onDispatch(actionCreator.addToMyBook(book, this.updateBookList.bind(this)))
  }
  render() {
    let { bookList } = this.props
    let bookListDom = bookList.list && bookList.list.map(item => (
      <div className="m-book-list-item" key={item.id}>
        <img src={item.avatar} alt={item.title} className="m-book-img"></img>
        <div className="m-book-info">
          <div className="m-book-title">{item.title}</div>
          <div>
            <span className="m-book-detail-btn" onClick={this.handleDetail.bind(this, item.id)}>书籍详情</span>
            {
              item.is_in_my_book
                ? <span className="m-book-add-to-my-book-btn-disabled">已在书架</span>
                : <span className="m-book-add-to-my-book-btn" onClick={this.handleAdd.bind(this, item)}>加入书架</span>
            }
          </div>
        </div>
      </div>
    ))
    return (
      <div className="m-book-list">
        {bookListDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.task.currentIndex,
    bookList: state.task.bookList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookList))
