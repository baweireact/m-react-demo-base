import React, {Component} from 'react'

class List extends Component {
  constructor(props) {
    super(props)
  }

  handleCheckbox(id, e) {
    this.props.onUpdateList(id, e.target.checked)
  }

  render() {
    let  {list,checked} = this.props
    return (
      <div>
        <div>

        </div>
        <ul>
          {
            list.filter(item => {
              if (checked === 'all') {
                return true
              } else {
                return item.checked === checked 
              }
            }).map((item, index) => (
              <li key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={this.handleCheckbox.bind(this, item.id)}></input>
                {item.text}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default List