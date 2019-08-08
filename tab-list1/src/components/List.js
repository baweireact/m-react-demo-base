import React, {Component} from 'react'
import './index.css'

class List extends Component {
  render() {
    let {
      list,
      currentIndex,
    } = this.props

    let listDom
    if (list.length > 0) {
      listDom = list[currentIndex].list.map((item) => (
        <div key={item.id} className='m-list-item'>
          <img src={item.image} className="m-list-img"></img>
          <div className="m-list-name">{item.name}</div>
        </div>
      ))
    }


    return (
      <div className="m-list">
        {listDom}
      </div>
    )
  }
}

export default List