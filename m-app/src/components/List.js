import React, {Component} from 'react'
import ListItem from '../components/ListItem.js'
import './index.css'

class List extends Component {
  handleAddToMyBook(book) {
    this.props.onAddToMyBook(book)
  }
  render() {
    let {
      list
    } = this.props
    let listDom
    if (list.length > 0) {
      listDom = list.map((item, index) => (
        <ListItem key={item.id} item={item} onAddToMyBook={this.handleAddToMyBook.bind(this)}></ListItem>
      ))
    }

    return(
      <div className="m-list">{listDom}</div>
    )
  }
}

export default List