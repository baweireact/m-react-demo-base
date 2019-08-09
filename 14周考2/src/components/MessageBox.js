import React, {Component} from 'react'
import './index.css'

class MessageBox extends Component {
  render() {
    let {
      messageInfo,
      active,
      detail,
    } = this.props
    let detailDom
    if (typeof detail.id !== 'undefined') {
      detailDom = (
        <div>
          <span className="m-message-box-num">{detail.followers}</span>
          <span>followers</span>
          <span className="m-message-box-num">{detail.repos}</span>
          <span>repos</span>
          <span className="m-message-box-num">{detail.following}</span>
          <span>following</span>
        </div>
      )
    }
    return (
      <div className={"m-message-box " + (active ? 'active ' : '') + ((typeof detail.id !== 'undefined') ? 'big': '')}>
        <div className="m-message-box-title">{messageInfo.name}</div>
        {detailDom}
      </div>
    )
  }
}

export default MessageBox