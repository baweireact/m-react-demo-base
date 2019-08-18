import axios from 'axios'
import actionTypes from './actionTypes'

const getBookNav = () => {
  return (dispatch) => {
    axios({
      url: '/book_nav',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'bookNav', value: res.data.data})
      }
    })
  }
}

const getBookList = (currentIndex) => {
  return (dispatch) => {
    axios({
      url: `/book_list?currentIndex=${currentIndex}`,
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'bookList', value: res.data.data})
      }
    })
  }
}

const getBookDetail = (currentIndex, id) => {
  return (dispatch) => {
    axios({
      url: `/book_detail?currentIndex=${currentIndex}&id=${id}`,
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'detail', value: res.data.data})
      }
    })
  }
}

const addToMyBook = (book, callback) => {
  return (dispatch) => {
    axios({
      url: '/book_add',
      method: 'post',
      data: {
        book
      }
    }).then(res => {
      if (res.data.code === 200) {
        callback && callback()
      }
    })
  }
}

const getMyBook = () => {
  return (dispatch) => {
    axios({
      url: '/my_book',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'myBookList', value: res.data.data})
      }
    })
  }
}

const bookDelete = (idArr, callback) => {
  return (dispatch) => {
    axios({
      url: '/book_delete',
      method: 'post',
      data: {
        idArr
      }
    }).then(res => {
      if (res.data.code) {
        callback && callback()
      }
    })
  }
}

export default {
  getBookNav,
  getBookList,
  getBookDetail,
  addToMyBook,
  getMyBook,
  bookDelete,
}