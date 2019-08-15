import React from 'react';
import { renderRoutes } from "react-router-config";
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

const Root = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);
const Index = ({ route }) => (
  <div>
    <Header></Header>
    <Sidebar></Sidebar>
    {renderRoutes(route.routes)}
  </div>
);

const HeBei = ({ route }) => (
  <div>
    <CityNav></CityNav>
    {renderRoutes(route.routes)}
  </div>
);

const ShiJiaZhuang = ({ route }) => (
  <div>
    <DistrictNav></DistrictNav>
    {renderRoutes(route.routes)}
  </div>
);

const ShanDong = ({ route }) => (
  <div>
    <CityNavForShanDong></CityNavForShanDong>
    {renderRoutes(route.routes)}
  </div>
);

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Login
      },
      {
        path: "/index",
        component: Index,
        routes: [
          {
            path: "/index/hebei",
            component: HeBei,
            routes: [
              {
                path: "/index/hebei/shijiazhuang",
                component: ShiJiaZhuang,
                routes: [
                  {
                    path: '/index/hebei/shijiazhuang/changan',
                    component: ChangAn,
                  },
                  {
                    path: '/index/hebei/shijiazhuang/qiaoxi',
                    component: QiaoXi,
                  },
                  {
                    path: '/index/hebei/shijiazhuang/xinhua',
                    component: XinHua,
                  }
                ]
              },
              {
                path: "/index/hebei/tangshan",
                component: TangShan
              },
              {
                path: "/index/hebei/qinhuangdao",
                component: QinHuangDao,
              }
            ]
          }, 
          {
            path: "/index/shandong",
            component: ShanDong,
            routes: [
              {
                path: "/index/shandong/jinan",
                component: JiNan
              },
              {
                path: "/index/shandong/qingdao",
                component: QingDao
              },
              {
                path: "/index/shandong/yantai",
                component: YanTai
              }
            ]
          },
          {
            path: "/index/shanxi",
            component: ShanXi
          }
        ]
      }
    ]
  }
];

export default routes