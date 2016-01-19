import React, { Component, Animated } from 'react-native';
import Rawbar from './raw';

export default class Dynamicbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.value = new Animated.Value(0);
  }

  show(enable, duration) {
    const { size } = this.props;
    const toValue = !!enable? 0 : -size;
    Animated.timing(this.value, {
      duration: duration,
      toValue
    }).start();
  }

  render() {
    const { children, size, style } = this.props;
    return (
      <Rawbar style={[style, { height: size, bottom: this.value }]}>
        {children}
      </Rawbar>
    );
  }
}

Dynamicbar.propTypes = {
  size: React.PropTypes.number.isRequired,
  style: React.PropTypes.any
};
