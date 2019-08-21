import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionTypes from '../store/task/actionTypes'

class Fold extends Component {
  handleCategory(index) {
    this.props.onSetState('currentCategoryIndex', index)
  }

  handleFold() {
    let { isFold } = this.props
    this.props.onSetState('isFold', !isFold)
  }

  render() {
    let { currentCategoryIndex, isFold } = this.props
    let categoryArr = ['全部', '科幻', '中国当代小说', '侦探/悬疑/推理', '外国小说', '历史', '情感',
      '世界名著', '官场', '中国古典小说', '武侠', '四大名著', '社会', '惊悚/恐怖', '作品集',
      '魔幻', '中国近现代小说', '职场', '军事', '财经', '影视小说', '都市', '乡土', '英文原版书-小说',
      '港澳台小说', '经典阅读']
    let categoryArrDom = categoryArr.map((item, index) => (
      <span 
        key={index} 
        className={'m-category-nav-item ' + (currentCategoryIndex === index ? 'active' : '')}
        onClick={this.handleCategory.bind(this, index)}>{item}</span>
    ))
    return (
      <div className="m-fold">
        <span className="m-fold-btn" onClick={this.handleFold.bind(this)}>{isFold ? '展开' : '收齐' }</span>
        <div className={"m-category-nav " + (isFold ? 'fold' : '')}>
          {categoryArrDom}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCategoryIndex: state.task.currentCategoryIndex,
    isFold: state.task.isFold,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({type: actionTypes.SET_STATE, key, value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fold)
