import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Index from '../pages/Index.js'
import List from '../pages/List.js'

class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route key="/" exact={true} path="/" component={Index}></Route>
        <Route key="/index" exact={true} path="/index" component={Index}></Route>
        <Route key="/list" exact={true} path="/list" component={List}></Route>
      </Switch>
    )
  }
}

export default Routers