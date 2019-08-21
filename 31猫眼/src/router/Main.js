import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Index from './Index'
import Cinema from '../pages/Cinema'
import Me from '../pages/Me'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerText: '猫眼电影'
    }
  }

  handleHeaderText(headerText) {
    this.setState({
      headerText
    })
  }

  render() {
    let { headerText } = this.state
    return (
      <>
        <Header headerText={headerText}></Header>
        <Switch>
          <Route path="/main/index" component={Index}></Route>
          <Route path="/main/cinema" component={Cinema}></Route>
          <Route path="/main/me" render={ () => {
            if (localStorage.getItem('username')) {
              return <Me></Me>
            } else {
              return <Redirect to="/login"></Redirect>
            }
          }}></Route>
        </Switch>
        <Footer onHeaderText={this.handleHeaderText.bind(this)}></Footer>
      </>
    )
  }
}
