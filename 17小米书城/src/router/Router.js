import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Index from '../pages/Index.js'

export default class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact={true} component={Index}></Route>
          <Route path='/index' exact={true} component={Index}></Route>
        </Switch>
      </div>
    )
  }
}
