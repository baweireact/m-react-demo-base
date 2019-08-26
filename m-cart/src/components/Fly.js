import React, { Component } from 'react'

export default class Fly extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flyImg: '',
      runFlyCount: 0,
      runFlyFlg: false,
      runFunName: 'fly',
      run: false,
    }
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.runFlyCount !== nextState.runFlyCount) {
      return {
        runFlyCount: nextProps.runFlyCount,
        runFlyFlg: true,
        runFunName: 'fly',
        flyImg: nextProps.flyImg,
      }
    } else {
      return {}
    }
  }

  componentDidUpdate() {
    let { runFlyFlg, runFunName } = this.state
    if (runFlyFlg && runFunName === 'fly') {
      this.handleFly()
    }
  }

  handleFly(img) {
    let flyImg = img
    if (!flyImg) {
      flyImg = this.props.flyImg
    }
    this.setState({
      flyImg,
      run: true,
      runFlyFlg: false
    })
    setTimeout(() => {
      this.setState({
        flyImg,
        run: false,
        runFlyFlg: false
      })
    }, 700)
  }
  render() {
    let {
      run,
      flyImg,
    } = this.state

    return (
      <div className="m-fly-wrap">
        <div className={"m-box " + (run ? 'run' : '')}>
          <div
            className={"m-inner " + (run ? 'run' : '')}
            style={{ backgroundImage: `url(${flyImg})` }}></div>
        </div>
      </div>
    )
  }
}
