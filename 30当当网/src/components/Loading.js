import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loading extends Component {
  render() {
    let { loading } = this.props
    return (
      <div className={"m-loading " + (loading ? 'active' : '')}>
        <span className="m-loading-img-wrap">
          <span className="m-loading-img"></span>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.task.loading
  }
}

export default connect(mapStateToProps)(Loading)
