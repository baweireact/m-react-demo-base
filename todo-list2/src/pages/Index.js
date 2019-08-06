import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import List from '../components/List.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: [],
    }
  }

  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleAdd() {
    let {text, list} = this.state
    list.unshift({
      id: (new Date()).getTime(),
      text,
      checked: false
    })
    this.setState({
      list,
      text: ''
    })
  }

  handleFocus() {
    console.log(this.refs.inputDom)
    this.refs.inputDom.focus()
    //inputDom.current.focus()
  }

  componentDidMount() {
    // inputDom.focus()
    // console.log(inputDom)
    //inputDom.current.focus()
    //console.log(inputDom.current)

    let a = ReactDOM.findDOMNode()
  }
  
  render() {
    let {
      text,
      list,
    } = this.state
    return (
      <div>
        <div>
          <input type="text" value={text} onChange={this.handleInput.bind(this, 'text')} ref='inputDom'></input>
          <button onClick={this.handleAdd.bind(this)}>添加</button>
          <button onClick={this.handleFocus.bind(this)}>获取焦点</button>
        </div>
        <List list={list}></List>
      </div>
    )
  }
}

export default Index