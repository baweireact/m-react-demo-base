import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import HeBeiCityNav from '../components/HeBeiCityNav'
import ShanDong from '../pages/ShanDong'
import ShanXi from '../pages/ShanXi'
import ShiJiaZhuang from '../pages/ShiJiaZhuang'
import QinHuangDao from '../pages/QinHuangDao'
import TangShan from '../pages/TangShan'
import './index.css'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login"></Redirect>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/index">
          <Route>
            <Header></Header>
            <Sidebar></Sidebar>
          </Route>
          <Switch>
            <Route path="/index/hebei">
              <Route>
                <HeBeiCityNav></HeBeiCityNav>
              </Route>
              <Switch>
                <Route path="/index/hebei/shijiazhuang" component={ShiJiaZhuang}></Route>
                <Route path="/index/hebei/qinhuangdao" component={QinHuangDao}></Route>
                <Route path="/index/hebei/tangshan" component={TangShan}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Route>
            <Route path="/index/shandong" component={ShanDong}></Route>
            <Route path="/index/shanxi" component={ShanXi}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Route>
        <Route component={NotFound}></Route>
        
      </Switch>
    )
  }
}
