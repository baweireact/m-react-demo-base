import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
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

const Index = ({ route }) => {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      {renderRoutes(route.routers)}
    </div>
  )
}

const HeBei = ({ route }) => {
  return (
    <div>
      <HeBeiCityNav></HeBeiCityNav>
      {renderRoutes(route.routers)}
    </div>
  )
}

const routers = [
  {
    path: '/',
    exact: true,
    component: Login
  }, {
    path: '/login',
    exact: true,
    component: Login
  }, {
    path: '/index',
    component: Index,
    routers: [
      {
        path: '/index/hebei',
        component: HeBei,
        routers: [
          {
            path: '/index/hebei/shijiazhuang',
            component: ShiJiaZhuang
          }, {
            path: '/index/hebei/qinhuangdao',
            component: QinHuangDao
          }, {
            path: '/index/hebei/tangshan',
            component: TangShan
          }, {
            component: NotFound
          }
        ]
      }, {
        path: '/index/shandong',
        component: ShanDong
      }, {
        path: '/index/shanxi',
        component: ShanXi
      }, {
        component: NotFound
      }
    ]
  }, {
    component: NotFound
  }
]

export default routers