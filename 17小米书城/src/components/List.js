import React, {Component} from 'react'
import ListItem from '../components/ListItem.js'
import './index.css'

class List extends Component {
  render() {
    let {
      list,
      currentIndex
    } = this.props
    let listDom
    if (list.length > 0) {
      listDom = list[currentIndex].list.map((item, index) => (
        <ListItem key={item.id} item={item}></ListItem>
      ))
    }

    return(
      <div className="m-list">{listDom}</div>
    )
  }
}

export default List