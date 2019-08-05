import React, {Component} from 'react'

class List extends Component {
  handleCheckbox(id, e) {
    this.props.onUpdateList(id, e.target.checked)
  }

  handleDelete(id) {
    this.props.onDelete(id)
  }

  render() {
    let {list, checked} = this.props
    let filterList = list.filter(item => {
      if (checked === 'all') {
        return true
      } else {
        return item.checked === checked
      }
    })
    return (
      <div>
        <ul>
          {
            filterList.map(item => (
              <li key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={this.handleCheckbox.bind(this, item.id)}></input>
                {item.text}
                <button onClick={this.handleDelete.bind(this, item.id)}>删除</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default List