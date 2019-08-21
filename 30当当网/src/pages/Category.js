import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import RightContent from '../components/RightContent'

class Category extends Component {
  render() {
    let { sidebarList } = this.props
    let routerDom = sidebarList.map(item => (
      <Route key={item.id} path={'/category/' + item.url} render={() => (<RightContent id={item.id}></RightContent>)}></Route>
    ))
    return (
      <div className="m-main">
        <div className="m-category">
          <Sidebar></Sidebar>
          <Switch>
            {routerDom}
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sidebarList: state.task.sidebarList
  }
}

export default connect(mapStateToProps, null)(Category)
