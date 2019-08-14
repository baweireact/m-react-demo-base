import React, { Component } from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import Index from '../pages/Index.js'
import Detail from '../pages/Detail.js'
import MyBook from '../pages/MyBook.js'
import './index.css'

export default class Router extends Component {
  render() {
    return (
      <div className="m-wrap">
        <Switch>
          <Route>
            <div className="m-nav">
              <NavLink to="/index" className="m-nav-item">首页</NavLink>
              <NavLink to="/mybook" className="m-nav-item">我的书架</NavLink>
            </div>
            <Route path="/" exact={true} component={Index}></Route>
            <Route path="/index" exact={true} component={Index}></Route>
            <Route path="/detail/:id" exact={true} component={Detail}></Route>
            <Route path="/mybook" exact={true} component={MyBook}></Route>
          </Route>
        </Switch>
      </div>
    )
  }
}
