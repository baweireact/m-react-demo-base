import React, {Component} from 'react'
import axios from 'axios'
import List from '../components/List.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    axios({
      url: '/list_item',
      method: 'get'
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data
        })
      }
    })
  }
  render() {
    let {
      list,
    } = this.state
    return (
      <div className="m-list-wrap">
        <List list={list}></List>
      </div>
    )
  }
}

export default Index