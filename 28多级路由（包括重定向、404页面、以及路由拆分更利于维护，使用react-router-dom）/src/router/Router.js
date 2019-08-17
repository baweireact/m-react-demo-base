import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/Login'
import ShanDong from '../pages/ShanDong'
import ShanXi from '../pages/ShanXi'
import ShiJiaZhuang from '../pages/ShiJiaZhuang'
import ZhangJiaKou from '../pages/ZhangJiaKou'
import ChengDe from '../pages/ChengDe'
import NoFound from '../pages/NoFound'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import HeBeiCity from '../components/HeBeiCity'
import './index.css'

const HeBei = () => {
  return (
    <>
      <Route>
        <HeBeiCity></HeBeiCity>
      </Route>
      <Route path="/index/hebei/shijiazhuang" component={ShiJiaZhuang}></Route>
      <Route path="/index/hebei/zhangjiakou" component={ZhangJiaKou}></Route>
      <Route path="/index/hebei/chengde" component={ChengDe}></Route>
    </>
  )
}

const Index = () => {
  return (
    <>
      <Route>
        <Header></Header>
        <Sidebar></Sidebar>
      </Route>
      <Switch>
        <Route path="/index/hebei" component={HeBei}></Route>
        <Route path="/index/shandong" component={ShanDong}></Route>
        <Route path="/index/shanxi" component={ShanXi}></Route>
      </Switch>
    </>
  )
}

export default class Router extends Component {
  render() {
    return (
      <>
        <Switch>
          <Redirect exact from="/" to="/login"></Redirect>
          <Redirect exact from="/index/hebei" to="/index/hebei/shijiazhuang"></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/index" component={Index}></Route>
          <Route component={NoFound}></Route>
        </Switch>
      </>
    )
  }
}
