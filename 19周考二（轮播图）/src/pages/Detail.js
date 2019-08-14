import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header.js'
import './index.css'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: {}
    }
  }
  handleSearch() {
    console.log(1)
  }
  componentDidMount() {
    let {id} = this.props.match.params
    axios({
      url: `/detail?id=${id}`,
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          detail: res.data.data
        })
      }
    })
  }
  render() {
    let {detail} = this.state
    let detailDom
    if (typeof detail.id !== 'undefined') {
      detailDom = (
        <div>
          <img className="m-detail-img" src={detail.image} alt={detail.title}></img>
          <div className="m-detail-title">{detail.title}</div>
          <div>
            <img className="m-list-author-img" src={detail.author} alt={detail.name}></img>
            <span className="m-list-author-name">{detail.name}</span>
            <span className="m-list-address-prefix">在</span>
            <span className="m-list-address">{detail.address}</span>
          </div>
        </div>
      )
    }
    return (
      <div>
        <Header onSearch={this.handleSearch.bind(this)}></Header>
        <div>
          {detailDom}
        </div>
      </div>
    )
  }
}

export default Detail
