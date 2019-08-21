import axios from 'axios'
import actionTypes from './actionTypes'

const getSidebarList = () => {
  return (dispatch) => {
    axios({
      url: '/left_list',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'sidebarList', value: res.data.data})
      }
    })
  }
}

const getRightList = (id) => {
  return (dispatch) => {
    dispatch({type: actionTypes.SET_STATE, key: 'loading', value: true})
    axios({
      url: `/right_list?id=${id}`,
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'rightList', value: res.data.data})
        setTimeout(() => {
          dispatch({type: actionTypes.SET_STATE, key: 'loading', value: false})
        }, 500)
      }
    })
  }
}

const getCategoryList = (id) => {
  return (dispatch) => {
    dispatch({type: actionTypes.SET_STATE, key: 'loading', value: true})
    axios({
      url: `/category?id=${id}`,
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'categoryList', value: res.data.data})
        setTimeout(() => {
          dispatch({type: actionTypes.SET_STATE, key: 'loading', value: false})
        }, 500)
      }
    })
  }
}

export default {
  getSidebarList,
  getRightList,
  getCategoryList,
}