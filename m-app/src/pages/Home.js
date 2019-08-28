import React, { Component } from 'react'
import Header from '../components/Header'
import RouterView from '../router/RouterView'

export default class Home extends Component {
  render() {
    let { routes } = this.props
    return (
      <div>
        <Header></Header>
        <RouterView routes={routes}></RouterView>
      </div>
    )
  }
}
