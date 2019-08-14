import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../pages/Login.js'
import Index from '../pages/Index.js'

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact={true} component={Login}></Route>
          <Route path='/index' component={Index}></Route>
        </Switch>
      </div>
    )
  }
}

export default Router
