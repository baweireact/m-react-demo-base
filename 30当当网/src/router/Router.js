import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../pages/Index'
import Category from '../pages/Category'
import Worth from '../pages/Worth'
import Cart from '../pages/Cart'
import Me from '../pages/Me'
import CategoryList from '../pages/CategoryList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import './index.css'

export default class Router extends Component {
  render() {
    return (
      <div className="m-wrap">
        <Header></Header>
        <Switch>
          <Redirect from="/" to="/index" exact></Redirect>
          <Redirect from="/category" to="/category/book" exact></Redirect>
          <Route path="/index" component={Index}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/worth" component={Worth}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/me" component={Me}></Route>
          <Route path="/category_list/:id" component={CategoryList}></Route>
        </Switch>
        <Footer></Footer>
        <Loading></Loading>
      </div>
    )
  }
}
