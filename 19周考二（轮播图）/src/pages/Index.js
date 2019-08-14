import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header.js'
import Banner from '../components/Banner.js'
import List from '../components/List.js'
import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
      historyContentList: [],
      contentList: [],
      page: 1,
    }
  }

  handleSearch(searchValue) {
    let {historyContentList} = this.state
    let contentList = historyContentList.filter(item => {
      return item.title.indexOf(searchValue) >= 0 || item.address.indexOf(searchValue) >= 0
    })
    this.setState({
      contentList
    })
  }

  handelMoreListData() {
    let {page, contentList} = this.state
    page = page + 1
    axios({
      url: `/list?page=${page}&size=10`,
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        contentList = contentList.concat(res.data.data)
        this.setState({
          contentList: contentList,
          historyContentList: contentList,
          page,
        })
      }
    })
  }

  componentDidMount() {
    axios({
      url: '/banner',
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          bannerList: res.data.data
        })
      }
    })
    axios({
      url: '/list?page=1&size=10',
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          contentList: res.data.data,
          historyContentList: res.data.data,
        })
      }
    })
  }

  render() {
    let {bannerList, contentList} = this.state
    return (
      <div className="m-home">
        <Header onSearch={this.handleSearch.bind(this)}></Header>
        <Banner bannerList={bannerList}></Banner>
        <List contentList={contentList}/>
        <div className="m-more-list-data" onClick={this.handelMoreListData.bind(this)}>
          加载更多
        </div>
      </div>
    )
  }
}
