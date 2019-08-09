import React, {Component} from 'react' 
import ListItem from './ListItem.js'
import './index.css'

class List extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let {list} = this.props

    let listDom = list.map((item, index) => (
      <ListItem 
        item={item} 
        key={index}></ListItem>
    ))
    return (
      <ul className="m-list">
        {listDom}
      </ul>
    )
  }
}

export default List