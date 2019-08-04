import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd() {
    let {count} = this.state
    count = count + 1

    //错误的写法
    //this.state.count = this.state.count + 1 

    this.setState({
      count
    })
  }

  render() {
    let {count} = this.state
    return (
      <div>
        {count}
        <div>
          <button onClick={this.handleAdd.bind(this)}>加</button>
        </div>
      </div>
    )
  }
}

export default App