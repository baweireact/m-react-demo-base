import React, {Component} from 'react'

class List extends Component {
  render() {
    let {list} = this.props
    let listDom = list.map(item => <li key={item.id}>{item.text}</li>)
    return (
      <ul>
        {listDom}
      </ul>
    )
  }
}

export default List