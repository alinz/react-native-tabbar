import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 0,
    right: 0,

    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const tabItemFor = (Component) => {
  return {
    atIndex: (index) => {
      return (Wrap) => {
        return Wrap
      }
    }
  }
}

export class Bar extends Component {
  static propTypes = {
    size: PropTypes.number,
    location: PropTypes.oneOf(['top', 'bottom'])
  }

  static defaultProps = {
    size: 50,
    location: 'bottom'
  }

  constructor(props, context) {
    super(props, context)
    this._innerStyle = {}
    this.firstTime = true
  }

  get window() {
    return Dimensions.get('window')
  }

  get innerStyle() {
    const { size, location } = this.props
    const { height } = this.window
    const top = location == 'bottom' ? height - size : 0

    return {
      top,
      height: size
    }
  }

  onLayout = () => {
    if (this.firstTime) {
      this.firstTime = false
      return
    }
    this.setState({})
  }

  render() {
    const { style, children } = this.props

    return (
      <View
        onLayout={this.onLayout}
        style={[style, styles.bar, this.innerStyle]}>
        {children}
      </View>
    )
  }
}
