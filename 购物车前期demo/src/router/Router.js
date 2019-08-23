import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Index from '../pages/Index'
import Cart from '../pages/Cart'
import Me from '../pages/Me'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

class Router extends Component {
  render() {
    return (
      <div className="m-wrap">
        <Header></Header>
        <Switch>
          <Redirect from="/" to="/index" exact></Redirect>
          <Route path="/index" component={Index}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/me" component={Me}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}

export default Router