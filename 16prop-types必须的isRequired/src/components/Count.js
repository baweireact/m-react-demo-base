import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Count extends Component {
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}

Count.propTypes = {
  count: PropTypes.any.isRequired
}

export default Count