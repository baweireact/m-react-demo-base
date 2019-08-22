import React, { Component } from 'react'
import { Input } from 'antd'
import axios from 'axios'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      list: [],
    }
  }
  handeBack() {
    this.props.history.push('/main/index/hot')
  }
  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
    axios({
      url: '/search',
      method: 'post',
      data: {
        searchValue: e.target.value
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data
        })
      }
    })
  }
  render() {
    let {
      searchValue,
      list,
    } = this.state

    let listDom = list.map(item => (
      <div key={item.id} className="m-index-list-item">
        <img src={item.img} alt={item.nm} className="m-item-img"></img>
        <div className="m-item-info">
          <div className="m-item-title">{item.nm}</div>
          <div className="m-item-scroe-wrap">
            <span>观众评</span>
            <span className="m-item-score">{item.sc}</span>
            </div>
        </div>
      </div>
    ))
    return (
      <div>
        <div className="m-header">
          <span className="m-back" onClick={this.handeBack.bind(this)}></span>
          猫眼电影
        </div>
        <div className="m-search-wrap">
          <Input className="m-search-input" placeholder="搜电影、搜影院" value={ searchValue } onChange={this.handleInput.bind(this, 'searchValue')}></Input>
        </div>
        <div>
          {listDom}
        </div>
      </div>
    )
  }
}
