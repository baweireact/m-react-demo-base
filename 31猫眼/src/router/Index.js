import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HotList from '../components/HotList'
import ComingList from '../components/ComingList'
import IndexNav from '../components/IndexNav'

export default class Index extends Component {
  render() {
    return (
      <div className="m-main">
        <div className="m-index-wrap">
          <Route>
            <IndexNav></IndexNav>
          </Route>
          <Route path="/main/index/hot" component={HotList}></Route>
          <Route path="/main/index/coming" component={ComingList}></Route>
        </div>
      </div>
    )
  }
}
