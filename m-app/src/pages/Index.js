import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{key: 'a', size: 10}, {key: 'b', size: 20}, {key: 'c', size: 30}]
    }
  }
  componentDidMount() {
    this.setState({
      items: [{key: 'a', size: 10}, {key: 'b', size: 20}], // remove c.
    });
  }
  willLeave() {
    // triggered when c's gone. Keeping c until its width/height reach 0.
    return {width: spring(0), height: spring(0)};
  }
  render() {
    return (
      <div>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
          {
            value => (
              <div style={value}>{value.x}</div>
            )
          }
        </Motion>
        <StaggeredMotion
          defaultStyles={[{ h: 0 }]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? { h: spring(100) }
              : { h: spring(prevInterpolatedStyles[i - 1].h) }
          })}>
          {interpolatingStyles =>
            <div>
              {interpolatingStyles.map((style, i) =>
                <div key={i} style={{ border: '1px solid', height: style.h }} />)
              }
            </div>
          }
        </StaggeredMotion>
        <TransitionMotion
          willLeave={this.willLeave}
          styles={this.state.items.map(item => ({
            key: item.key,
            style: { width: item.size, height: item.size },
          }))}>
          {interpolatedStyles =>
            // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
            <div>
              {interpolatedStyles.map(config => {
                return <div key={config.key} style={{ ...config.style, border: '1px solid' }} />
              })}
            </div>
          }
        </TransitionMotion>
      </div>
    )
  }
}
