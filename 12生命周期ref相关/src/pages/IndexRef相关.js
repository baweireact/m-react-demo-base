import React, { Component } from 'react'
import Count from '../components/Count.js'
import ReactDOM from 'react-dom'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.countRef = React.createRef()
  }

  handleUpate() {
    this.forceUpdate()
  }

  handleUnmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  componentWillMount() {
    this.setState({
      count: 0
    })
  }

  componentDidMount() {
    let dom = ReactDOM.findDOMNode(this.countRef.current)
    console.log(dom)
    let indexDom = ReactDOM.findDOMNode(this)
    console.log(indexDom)
  }

  componentWillUnmount() {
    console.log('卸载前')
  }

  render() {
    console.log('渲染')
    let {
      count
    } = this.state
    return (
      <div>
        <Count count={count} ref={this.countRef}></Count>
        <button onClick={this.handleUpate.bind(this)}>强制更新</button>
        <button onClick={this.handleUnmount.bind(this)}>卸载</button>
      </div>
    )
  }
}

export default Index