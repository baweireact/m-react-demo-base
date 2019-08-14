import React, { Component } from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import ChangAn from './district/ChangAn.js'
import QiaoXi from './district/QiaoXi.js'
import XinHua from './district/XinHuang.js'

export default class ShiJiaZhuang extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route>
            <NavLink to="/index/hebei/shijiazhuang/changan" className="m-district">长安区</NavLink>
            <NavLink to="/index/hebei/shijiazhuang/qiaoxi" className="m-district">桥西区</NavLink>
            <NavLink to="/index/hebei/shijiazhuang/xinhua" className="m-district">新华区</NavLink>
          </Route>
          <Route path="/index/hebei/shijiazhuang/changan" component={ChangAn}></Route>
          <Route path="/index/hebei/shijiazhuang/qiaoxi" component={QiaoXi}></Route>
          <Route path="/index/hebei/shijiazhuang/xinhua" component={XinHua}></Route>
        </BrowserRouter>
      </div>
    )
  }
}
