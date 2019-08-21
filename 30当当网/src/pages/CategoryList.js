import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/task/actionCreator'
import Fold from '../components/Fold'

class CategoryList extends Component {
  componentDidMount() {
    let { id } = this.props.match.params
    this.props.onDispatch(actionCreator.getCategoryList(id))
  }
  render() {
    let { categoryList } = this.props
    let categoryListDom
    if (typeof categoryList.id !== 'undefined') {
      categoryListDom = categoryList.list.map(item => (
        <div key={item.id} className="m-category-list-item">
          <img src={item.image_url} className="m-category-item-img"></img>
          <div className="m-category-item-info">
            <div className="m-category-item-title">{item.name}</div>
          </div>
        </div>
      ))
    }

    return (
      <div className="m-main">
        <div className="m-category-wrap">
          <div className="m-category-title">
            {categoryList.title}
          </div>
          <Fold></Fold>
          {categoryListDom}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categoryList: state.task.categoryList
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
