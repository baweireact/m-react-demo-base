import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'

class HotList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  handleDetail(id) {
    this.props.history.push('/detail/' + id)
  }

  handleOrderByScore(order) {
    let { list } = this.state
    list.sort((a, b) => {
      if (order === 'desc') {
        return a.sc - b.sc
      } else if (order === 'asc') {
        return b.sc - a.sc
      }
    })
    this.setState({
      list
    })
  }

  handleOrderByName(order) {
    let { list } = this.state
    list.sort((a, b) => {
      if (order === 'desc') {
        return a.nm.localeCompare(b.nm)
      } else if (order === 'asc') {
        return b.nm.localeCompare(a.nm)
      }
    })
    this.setState({
      list
    })
  }

  componentDidMount() {
    axios({
      url: '/movie_list',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data
        })
      }
    })
  }

  render() {
    let { list } = this.state
    let listDom = list.map(item => (
      <div key={item.id} className="m-index-list-item" onClick={this.handleDetail.bind(this, item.id)}>
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
      <div className="m-index-list">
        <div className="m-order-by-wrap">
          <Button className="m-order-by-btn" onClick={this.handleOrderByName.bind(this, 'desc')}>按名称降序</Button>
          <Button className="m-order-by-btn" onClick={this.handleOrderByName.bind(this, 'asc')}>按名称升序</Button>
          <Button className="m-order-by-btn" onClick={this.handleOrderByScore.bind(this, 'desc')}>按分数降序</Button>
          <Button className="m-order-by-btn" onClick={this.handleOrderByScore.bind(this, 'asc')}>按分数升序</Button>
        </div>
        <div>
          {listDom}
        </div>
      </div>
    )
  }
}

export default withRouter(HotList)
