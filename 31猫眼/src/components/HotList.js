import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
        </div>
      </div>
    ))
    return (
      <div className="m-index-list">
        {listDom}
      </div>
    )
  }
}

export default withRouter(HotList)
