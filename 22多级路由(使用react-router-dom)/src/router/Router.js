import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/Login.js'
import Header from '../components/Header.js'
import Sidebar from '../components/Sidebar.js'
import CityNav from '../components/CityNav.js'
import CityNavForShanDong from '../components/CityNavForShanDong.js'
import DistrictNav from '../components/DistrictNav.js'
import ShanXi from '../pages/province/ShanXi.js'
import TangShan from '../pages/province/city/TangShan.js'
import QinHuangDao from '../pages/province/city/QinHuangDao.js'
import JiNan from '../pages/province/city/JiNan.js'
import QingDao from '../pages/province/city/QingDao.js'
import YanTai from '../pages/province/city/YanTai.js'
import ChangAn from '../pages/province/city/district/ChangAn.js'
import QiaoXi from '../pages/province/city/district/QiaoXi.js'
import XinHua from '../pages/province/city/district/XinHua.js'
import './index.css'


class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact={true} component={Login}></Route>
          <Route path='/index'>
            <Route>
              <Header></Header>
              <Sidebar></Sidebar>
            </Route>
            <Switch>
              <Route path="/index/hebei">
                <Route>
                  <CityNav></CityNav>
                </Route>
                <Switch>
                  <Route path="/index/hebei/shijiazhuang">
                    <Route>
                      <DistrictNav></DistrictNav>
                    </Route>
                    <Switch>
                      <Route path="/index/hebei/shijiazhuang/changan" component={ChangAn}></Route>
                      <Route path="/index/hebei/shijiazhuang/qiaoxi" component={QiaoXi}></Route>
                      <Route path="/index/hebei/shijiazhuang/xinhua" component={XinHua}></Route>
                    </Switch>
                  </Route>
                  <Route path="/index/hebei/tangshan" component={TangShan}></Route>
                  <Route path="/index/hebei/qinhuangdao" component={QinHuangDao}></Route>
                </Switch>
              </Route>
              <Route path="/index/shandong">
                <Route>
                  <CityNavForShanDong></CityNavForShanDong>
                </Route>
                <Route path="/index/shandong/jinan" component={JiNan}></Route>
                <Route path="/index/shandong/qingdao" component={QingDao}></Route>
                <Route path="/index/shandong/yantai" component={YanTai}></Route>
              </Route>
              <Route path="/index/shanxi" component={ShanXi}></Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Router
