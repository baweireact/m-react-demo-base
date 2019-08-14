import React, {Component} from 'react'
import {Switch, Route, Link, NavLink} from 'react-router-dom'
import Login from '../pages/Login.js'
import Index from '../pages/Index.js'

class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route key="/" path="/" exact={true} component={Login}></Route>
          <Route key="/login" path="/login" exact={true} component={Login}></Route>
          <Route key="/index" path="/index" exact={true} component={Index}></Route>
        </Switch>
      </div>
    )
  }
}

export default Routers