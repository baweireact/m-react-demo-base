import React, { Component } from 'react'
import './index.css'

class ScrollingList extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 我们是否在 list 中添加新的 items ？
    // 捕获滚动位置以便我们稍后调整滚动位置。
    if (prevProps.list.length < this.props.list.length || true) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    // （这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
      //list.scrollTop = snapshot
    }
  }

  render() {
    let {
      list
    } = this.props
    return (
      <div>
        <ul className="m-list-wrap" ref={this.listRef}>
          {
            list.map(item => (
              <li key={item.id}>
                {item.text}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ScrollingList