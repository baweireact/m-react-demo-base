import React, {Component} from 'react' 
import User from '../components/User.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      name: '',
      count: 0
    }
  }

  handleInput(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleUpdateUserName() {
    let {text} = this.state
    this.setState({
      text: '',
      name: text,
    })
  }

  handleAdd() {
    let {count} = this.state
    count = count + 1
    this.setState({
      count
    })
  }

  // componentWillUpdate() {
  //   console.log('更新前')
  // }

  // componentDidUpdate() {
  //   let {count} = this.state
  //   console.log('更新后', count)
  // }

  // componentWillMount() {
  //   let dom = document.getElementById('m-btn')
  //   console.log('挂载前')
  //   console.log(dom)
  // }

  // componentDidMount() {
  //   console.log('挂载后')
  //   let dom = document.getElementById('m-btn')
  //   console.log(dom)
  // }

  render() {
    let {
      text,
      count,
      name,
    } = this.state
    return (
      <div>
        <div>{count}</div>
        <button id="m-btn" onClick={this.handleAdd.bind(this)}>加</button>
        <input type="text" value={text} onChange={this.handleInput.bind(this)} ></input>
        <button onClick={this.handleUpdateUserName.bind(this)}>修改子组件的name</button>
        <User name={name}></User>
      </div>
    )
  }
}

export default Index