import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, message } from 'antd'
import actionCreator from '../store/task/actionCreator'

class MyBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: []
    }
  }

  handleDelete(idArr) {
    if (idArr.length > 0) {
      this.props.onDispatch(actionCreator.bookDelete(idArr, this.getMyBook.bind(this)))
    } else {
      message.info('请选择要删除的条目！')
    }
  }

  getMyBook() {
    this.props.onDispatch(actionCreator.getMyBook())
  }

  componentDidMount() {
    this.getMyBook()
  }
  render() {
    let { selectedRowKeys } = this.state
    let {myBookList} = this.props
    let columns = [
      {
        title: '书名',
        dataIndex: 'title'
      }, {
        title: '作者',
        dataIndex: 'author'
      }, {
        title: '操作',
        render: (text, record) =>{
          return <Button onClick={this.handleDelete.bind(this, [record.id])}>删除</Button>
        }
      }
    ]

    let rowSelection = {
      onChange: (selectedRowKeys) => {
        this.setState({
          selectedRowKeys
        })
      }
    }

    return (
      <div className="m-my-book">
        <div>
          <Button onClick={this.handleDelete.bind(this, selectedRowKeys)}>删除</Button>
        </div>
        <Table
          columns={columns}
          dataSource={myBookList}
          rowKey='id'
          rowSelection={rowSelection}
          >
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myBookList: state.task.myBookList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBook)
