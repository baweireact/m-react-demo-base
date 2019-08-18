import React, { Component } from 'react'
import BookNav from '../components/BookNav'
import BookList from '../components/BookList'

export default class Index extends Component {
  render() {
    return (
      <div className="m-index">
        <BookNav></BookNav>
        <BookList></BookList>
      </div>
    )
  }
}
