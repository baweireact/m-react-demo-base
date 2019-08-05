import React, {Component} from 'react'

class List extends Component {

  handleCheckbox(id, e) {
    this.props.onUpdateList(id, e.target.checked)
  }

  render() {
    let {
      list,
      checked,
    } = this.props

    let listDom = list.filter(item => {
      if (checked === 'all') {
        return true
      } else {
        return item.checked === checked
      }
    }).map(item => (<li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={this.handleCheckbox.bind(this, item.id)}></input>
      {item.text}
    </li>))
    return (
      <ul>
        {listDom}
      </ul>
    )
  }
}

export default List