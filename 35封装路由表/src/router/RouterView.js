import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './index.css'

class RouterView extends Component {
  render() {
    let { routes } = this.props
    let rdArr = routes.filter(item => item.redirect)
    let rdCom = rdArr.map((item, key) => <Redirect from={item.path} to={item.redirect} key={key} exact />)
    return (
      <Switch>
        {rdCom}
        {
          routes.map((item, key) => {
            return !item.redirect && <Route path={item.path} key={key} render={(props) => (
              <item.component {...props} routes={item.children} />
            )} />
          })
        }
      </Switch>
    );
  }
}
export default RouterView