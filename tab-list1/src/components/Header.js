import React, {Component} from 'react'
import './index.css'

class Header extends Component {

  handleNavClick(index) {
    this.props.onNavClick(index)
  }

  render() {
    let {
      list,
      currentIndex,
    } = this.props

    let listDom = list.map((item, index) => (
      <span 
        className={'m-nav-item ' + (currentIndex === index ? 'active' : '')} 
        key={index}
        onClick={this.handleNavClick.bind(this, index)}
        >
        {item.title}</span>
    ))
    return (
      <div>
        {listDom}
      </div>
    )
  }
}

export default Header