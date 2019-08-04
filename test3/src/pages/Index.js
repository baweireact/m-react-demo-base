import React, {Component} from 'react'
import Control from '../components/Control'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: 'xu',
    }
  }
  
  //父组件里用于增加的方法
  handleAdd() {
    let {count} = this.state
    count = count + 1
    this.setState({
      count
    })
  }

  //父组件里改变name的值，传给子组件
  handleUpdateName() {
    this.setState({
      name: 'new name'
    })
  }

  //enter事件
  handleInputEnter(e) {
    if (e.keyCode === 13) {
      console.log(1)
    }
  }

  render() {
    let {
      count,
      name,
    } = this.state
    return (
      <div>
        {count}
        <input type="text" onKeyDown={this.handleInputEnter.bind(this)}></input>
        <button onClick={this.handleUpdateName.bind(this)}>改变name</button>
        <Control name={name} onAdd={this.handleAdd.bind(this)} />
      </div>
    )
  }
}

export default Index