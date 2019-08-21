import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    let { id } = this.props.match.params
    return (
      <div>
        detail, {id}
      </div>
    )
  }
}
