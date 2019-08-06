import React, {Component} from 'react'
import './index.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  handleNav(index) {
    this.setState({
      currentIndex: index
    })
    this.props.onClickNav(index)
  }
  render() {
    let {
      list,
    } = this.props
    let {
      currentIndex,
    } = this.state
    let nav = list.map((item, index) => (
      <span 
        className={'m-nav-item ' + (currentIndex === index ? 'active': '')} 
        key={index}
        onClick={this.handleNav.bind(this, index)}
        >{item.title}</span>
    ))
    return(
      <div>{nav}</div>
    )
  }
}

export default Header