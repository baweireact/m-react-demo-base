import React, { Component } from 'react'
import { Table, Button, message } from 'antd'

export default class MyBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      selectedRowKeys: []
    }
  }

  handleRowSelection(selectedRowKeys) {
    this.setState({
      selectedRowKeys
    })
  }

  handleDeleteSelected() {
    let { selectedRowKeys } = this.state
    console.log(selectedRowKeys)
    if (selectedRowKeys.length === 0) {
      message.info('请选择要删除的书')
      return
    }
    let myBook = localStorage.getItem('mybook')
    myBook = JSON.parse(myBook)
    myBook = myBook.filter(item => selectedRowKeys.indexOf(item.id) < 0)
    localStorage.setItem('mybook', JSON.stringify(myBook))
    this.setState({
      list: myBook
    })
  }

  handleDelete(id) {
    let myBook = localStorage.getItem('mybook')
    myBook = JSON.parse(myBook)
    myBook = myBook.filter(item => item.id !== id)
    localStorage.setItem('mybook', JSON.stringify(myBook))
    this.setState({
      list: myBook
    })
  }

  componentDidMount() {
    let myBook = localStorage.getItem('mybook')
    myBook = JSON.parse(myBook)
    this.setState({
      list: myBook
    })
  }
  render() {
    let {
      list,
      selectedRowKeys,
    } = this.state
    let columns = [
      {
        title: '书名',
        dataIndex: 'title'
      },
      {
        title: '作者',
        dataIndex: 'author'
      },
      {
        title: '操作',
        render: (text, record) => {
          return <div>
            <Button onClick={this.handleDelete.bind(this, record.id)}>删除</Button>
          </div>
        }
      }
    ]
    return (
      <div className="m-my-book">
        <div className="m-toolbar">
          <Button onClick={this.handleDeleteSelected.bind(this)}>删除</Button>
        </div>
        <Table
          columns={columns}
          dataSource={list}
          rowKey='id'
          rowSelection={{
            selectedRowKeys,
            onChange: this.handleRowSelection.bind(this)
          }}
        ></Table>
      </div>
    )
  }
}
