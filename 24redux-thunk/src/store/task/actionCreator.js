import axios from 'axios'

const getCount = () => {
  return (dispatch) => {
    dispatch({type:'SET_STATE', key: 'count', value: 666})
    axios({
      url: '/get_count',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: 'SET_STATE', key: 'count', value: res.data.data})
      }
    })
  }
}

export default {
  getCount
}