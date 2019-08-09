import React, {Component} from 'react'
import {ThemeContext} from './theme-context';
import Toolbar from '../components/Toolbar.js'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd() {
    let {count} = this.state
    count = count + 1
    this.setState({
      count
    })
  }

  render() {
    let {count} = this.state
    return (
      <div>
        <ThemeContext.Provider value={count}>
          <Toolbar/>
          <button onClick={this.handleAdd.bind(this)}>加</button>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Index