import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Input, Button} from 'antd'
import './index.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }
  handleInput(field, e) {
    this.setState({
      [field]: e.target.value
    })
    this.props.onSearch(e.target.value)
  }
  handleSearch() {
    let {searchValue} = this.state
    this.props.onSearch(searchValue)
  }
  render() {
    let {
      searchValue
    } = this.state
    return (
      <div className="m-header">
        <Link to="/index"><span className="m-logo"></span></Link> 
        <div className="m-input-wrap">
          <Input 
            type="text" 
            className="m-input" 
            placeholder="搜索目的地/攻略/游记" 
            value={searchValue} 
            onChange={this.handleInput.bind(this, 'searchValue')}></Input>
        </div>
        <Button className="m-serach-btn" onClick={this.handleSearch.bind(this)}>
          搜索
        </Button>
      </div>
    )
  }
}
