import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  tabar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})

const magicScroll = (minVal, maxVal, offset, step = 1) => {
  let prevVal = 0
  let heightVal = maxVal
  let offsetVal = offset

  step = Math.abs(step)

  const min = (val) => val < minVal ? minVal : val
  const max = (val) => val > maxVal ? maxVal : val
  const delta = (val) => {
    const dt = val - prevVal
    prevVal = val
    return dt
  }

  return {
    calc: (val) => {
      const dt = val < 0 ? 0 : delta(val)

      if (dt < 0 && heightVal == minVal) {
        //decrement offset value until it reaches zero
        offsetVal += dt
        if (offsetVal > 0) {
          return heightVal
        }
        offsetVal = offset
      } else if (dt > 0 && heightVal == maxVal) {
        offsetVal -= dt
        if (offsetVal > 0) {
          return heightVal
        }
        offsetVal = offset
      }

      heightVal -= step * dt

      heightVal = min(heightVal)
      heightVal = max(heightVal)

      return heightVal
    },
    hide: () => {
      offsetVal = offset
      heightVal = minVal
    },
    show: () => {
      offsetVal = offset
      heightVal = maxVal
    }
  }
}

export default class Tabar extends Component {
  static propTypes = {
    height: PropTypes.number,
    offset: PropTypes.number,
    step: PropTypes.number,
    show: PropTypes.bool,
    disable: PropTypes.bool
  }

  static defaultProps = {
    height: 50,
    offset: 150,
    step: 0.25,
    show: true,
    disable: false
  }

  constructor(props, context) {
    super(props, context)
    const { height, offset, step, show } = props
    this.state = this.makeState(height, offset, step, show)
    this.ignoreFirstLayoutCall = true
  }

  makeState(height, offset, step, show) {
    const top = this.calculateTop(height)
    return {
      top: new Animated.Value(top),
      scroll: magicScroll(0, height, offset, step)
    }
  }

  updateHeight = (scrollY) => {
    let height
    if (!this.props.disable) {
      height = this.state.scroll.calc(scrollY)
      this.state.top.setValue(this.window.height - height)
    }
  }

  calculateTop(height) {
    const top = this.window.height
    if (this.props.show) {
      return top - height
    }
    return top
  }

  get window() {
    return Dimensions.get('window')
  }

  get style() {
    let style
    if (this.props.disable) {
      style = [
        this.props.style,
        {
          height: this.props.height,
          width: this.window.width
        }
      ]
    } else {
      style = [
        this.props.style,
        styles.tabar,
        {
          height: this.props.height,
          top: this.state.top
        }
      ]
    }
    return style
  }

  hide = (duration = 200) => {
    Animated.timing(this.state.top, {
      duration,
      toValue: this.window.height
    }).start(() => {
      this.state.scroll.hide()
    })
  }

  show = (duration = 200) => {
    Animated.timing(this.state.top, {
      duration,
      toValue: this.window.height - this.props.height
    }).start(() => {
      this.state.scroll.show()
    })
  }

  //once the oriantation changes, call this method
  //so the tabbar can be position correctly.
  recalculate = () => {
    if (this.ignoreFirstLayoutCall) {
      this.ignoreFirstLayoutCall = false
      return
    }
    if (this.props.disable) {
      this.setState({})
    } else {
      this.state.top.setValue(this.calculateTop(this.props.height))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.height !== nextProps.height ||
        this.props.offset !== nextProps.offset ||
        this.props.step !== nextProps.step ||
        this.props.show !== nextProps.show) {
        this.state = this.makeState(
          nextProps.height,
          nextProps.offset,
          nextProps.step,
          nextProps.show
        )
    }
  }

  render() {
    return (
      <Animated.View
        style={this.style}>
        { this.props.children }
      </Animated.View>
    )
  }
}
