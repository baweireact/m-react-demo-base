import React, { Component } from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import ShiJiaZhuang from './city/ShiJiaZhuang.js'
import TangShan from './city/TangShan.js'
import QinHuangDao from './city/QinHuangDao.js'

export default class HeiBei extends Component {
  render() {
    return (
      <div className="m-province-content">
        <BrowserRouter>
          <Route>
            <NavLink to="/index/hebei/shijiazhuang/changan" className="m-city">石家庄</NavLink>
            <NavLink to="/index/hebei/tanshan" className="m-city">唐山</NavLink>
            <NavLink to="/index/hebei/qinhuangdao" className="m-city">秦皇岛</NavLink>
          </Route>
          <Route path="/index/hebei/shijiazhuang" component={ShiJiaZhuang}></Route>
          <Route path="/index/hebei/tanshan" component={TangShan}></Route>
          <Route path="/index/hebei/qinhuangdao" component={QinHuangDao}></Route>
        </BrowserRouter>
      </div>
    )
  }
}
