import React, {Component} from 'react'
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
        <div
          className='m-list-item' 
          key={index}
          >
            <img src={item.image} className="m-list-img" alt={item.name}></img>
            <div className="m-list-title">{item.name}</div>
        </div>
      ))
    }

    return(
      <div>{listDom}</div>
    )
  }
}

export default List