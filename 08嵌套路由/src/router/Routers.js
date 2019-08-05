import React, {Component} from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import Index from '../pages/Index.js'
import List from '../pages/List.js'
import About from '../pages/About.js'
import './index.css'

class Routers extends Component {
  render() {
    return(
      <Switch>
        <Route>
          <div className="m-nav">
            <NavLink to="/index" className="m-link" activeClassName="active">Index</NavLink>
            <NavLink to='/list' className="m-link" activeClassName="active">List</NavLink>
            <NavLink to="/about" className="m-link" activeClassName="active">About</NavLink>
          </div>
          <Route key="/" path="/" exact={true} component={Index}></Route>
          <Route key="/index" path="/index" exact={true} component={Index}></Route>
          <Route key="/list" path="/list" exact={true} component={List}></Route>
          <Route key="/about" path="/about" exact={true} component={About}></Route>
        </Route>
      </Switch>
    )
  }
}

export default Routers