import React, { Component, Animated } from 'react-native';
import Rawbar from './raw';
import { window } from './../util';

export default class Dynamicbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.value = new Animated.Value(window.height - props.size);
  }

  show(enable, duration) {
    const toValue = !!enable? window.height - this.props.size : window.height;
    Animated.timing(this.value, {
      duration: duration,
      toValue
    }).start();
  }

  render() {
    const { children, size, style } = this.props;
    return (
      <Rawbar style={[style, { height: size, top: this.value }]}>
        {children}
      </Rawbar>
    );
  }
}

Dynamicbar.propTypes = {
  size: React.PropTypes.number.isRequired,
  style: React.PropTypes.any
};
