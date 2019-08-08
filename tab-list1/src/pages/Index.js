import React from 'react'
import Input from '../components/Input.js'
import ReactDom from 'react-dom'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate() {
    console.log('性能优化')
    return true
  }

  handleRef(element) {
    this.input = element
  }

  handleBtn(e) {
    //this.input.focus()
    // let dom = ReactDom.findDOMNode(this.refs.input)
    // console.log(dom)

    //ReactDom.unmountComponentAtNode(document.getElementById('root'))
    // let {count} = this.state
    // count = count + 1
    // this.setState({
    //   count
    // })

    this.forceUpdate()
  }

  componentDidMount() {
    //this.refs.input.focus()
  }

  render() {
    console.log('渲染')
    let {
      count
    } = this.state
    return (
      <div>
        {count}
        <Input onRef={this.handleRef.bind(this)} ref="input"></Input>
        <button onClick={this.handleBtn.bind(this)}>按钮</button>
      </div>
    )
  }
}