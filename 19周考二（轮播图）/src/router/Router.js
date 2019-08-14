import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import Index from '../pages/Index.js'
import Detail from '../pages/Detail.js'

export default class Router extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact={true} component={Index} ></Route>
          <Route path='/index' exact={true} component={Index} ></Route>
          <Route path='/detail/:id' exact={true} component={Detail} ></Route>
        </Switch>
      </div>
    )
  }
}
