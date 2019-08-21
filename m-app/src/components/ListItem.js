import React, {Component} from 'react'
import axios from 'axios'
import MessageBox from './MessageBox.js'
import './index.css'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      detail: {},
    }
  }

  handleEnter() {
    this.setState({
      active: true
    })
  }

  handleLeave() {
    this.setState({
      active: false,
      detail: {}
    })
  }

  handleGetDetail(id) {
    axios({
      url: `/list_item/detail?id=${id}`,
      method: 'get'
    }).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        this.setState({
          detail: res.data.data
        })
      }
    })
  }

  render() {
    let {item} = this.props
    let {
      active,
      detail,
    } = this.state
    return (
      <li className="m-list-item" 
        onMouseEnter={this.handleEnter.bind(this)}
        onMouseLeave={this.handleLeave.bind(this)}
        onClick={this.handleGetDetail.bind(this, item.id)}
        >
        <span className="m-list-item-name">{item.name}</span>
        <span className="m-list-item-status">{item.status}</span>
        <span 
          className={"m-list-item-code " + (item.status === 'closed' || item.status === 'edited' ? 'active' : '')}>
          {item.code}
        </span>
        <span className="m-list-item-time">{item.time}</span>
        <MessageBox messageInfo={item} active={active} detail={detail}/>
      </li>
    )
  }
}

export default ListItem