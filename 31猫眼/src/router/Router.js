import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Detail from '../pages/Detail'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Main from './Main'
import './index.css'

export default class Router extends Component {
  render() {
    return (
      <div className="m-wrap">
        <Switch>
          <Redirect from="/" to="/main/index/hot" exact></Redirect>
          <Redirect from="/main/index" to="/main/index/hot" exact></Redirect>
          <Route path="/main" component={Main}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    )
  }
}
