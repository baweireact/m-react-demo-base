import React, {Component} from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: [],
      doingCount: 0,
      doneCount: 0,
    }
  }

  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  handleCheckbox(index, e) {
    let {list} = this.state
    list[index].checked = e.target.checked
    this.setState({
      list
    })
    this.doingAndDoneCount()
  }

  doingAndDoneCount() {
    let {list} = this.state
    let doingCount = 0, doneCount
    for (let i = 0; i < list.length; i++) {
      if (!list[i].checked) {
        doingCount = doingCount + 1
      }
    }
    doneCount = list.length - doingCount
    this.setState({
      doingCount,
      doneCount,
    })
  }

  handleInputEnter(e) {
    if (e.keyCode === 13) {
      let {text, list} = this.state
      list.push({
        text,
        checked: false
      })
      this.setState({
        list,
        text: ''
      })
      this.doingAndDoneCount()
    }
  }

  renderDoingList() {
    let {list} = this.state
    let arr = []
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked === false) {
        arr.push(<li key={i}>
          <input type="checkbox" checked={list[i].checked} onChange={this.handleCheckbox.bind(this, i)}></input> 
          {list[i].text} 
        </li>)
      }
    }
    return arr
  }

  renderDoneList() {
    let {list} = this.state
    let arr = []
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked) {
        arr.push(<li key={i}>
          <input type="checkbox" checked={list[i].checked} onChange={this.handleCheckbox.bind(this, i)}></input>
          {list[i].text}
        </li>)
      }
    }
    return arr
  }

  render() {
    let {text, doingCount, doneCount} = this.state
    let doingList = this.renderDoingList()
    let doneList = this.renderDoneList()
    return (
      <div>
        <div>
          {text}
        </div>
        <div>
          <input text="text" value={text} onKeyDown={this.handleInputEnter.bind(this)} onChange={this.handleInput.bind(this, 'text')}/>
        </div>
        <div>正在进行({doingCount})：</div>
        <ul>{doingList}</ul>
        <div>已经完成({doneCount})：</div>
        <ul>{doneList}</ul>
      </div>
    )
  }
}

export default Index