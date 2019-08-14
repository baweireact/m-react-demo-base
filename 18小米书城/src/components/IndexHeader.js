import React, {Component} from 'react'
import axios from 'axios'
import './index.css'

class IndexHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      list: []
    }
  }
  handleNav(index) {
    this.setState({
      currentIndex: index
    })
    this.props.onClickNav(index)
  }

  componentDidMount() {
    axios({
      url: '/book_nav',
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data
        })
      }
    })
  }

  render() {
    let {
      list,
      currentIndex
    } = this.state
    let nav = list.map((item, index) => (
      <span 
        className={'m-index-nav-item ' + (currentIndex === index ? 'active': '')} 
        key={index}
        onClick={this.handleNav.bind(this, index)}
        >{item.title}</span>
    ))
    return(
      <div className="m-index-nav">{nav}</div>
    )
  }
}

export default IndexHeader