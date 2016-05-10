import React, { Component } from 'react';
import { Animated } from 'react-native';
import Rawbar from './raw';

const sizeLimit = (minValue, maxValue) => {
  let prevValue = 0;
  let delta;

  let actualValue = maxValue;

  return {
    process: (value) => {
      if (value < minValue) {
        value = minValue;
      }

      delta = value - prevValue;
      prevValue = value;

      actualValue -= delta;

      if (actualValue < minValue) {
        actualValue = minValue;
      } else if (actualValue > maxValue) {
        actualValue = maxValue;
      }

      return actualValue;
    },
    //we need to reset because if `show` method is called we need
    //to make sure that the actualValue is set properly to prevent
    //jaggy animation.
    reset: (value) => actualValue = value
  };
};

export default class Dynamicbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.value = new Animated.Value(0);
    this._sizeLimit = sizeLimit(0, this.props.size);
  }

  show(enable, duration) {
    const { size } = this.props;
    const toValue = !!enable? 0 : -size;
    this._sizeLimit.reset(!!enable? size : 0);
    Animated.timing(this.value, {
      duration: duration,
      toValue
    }).start();
  }

  setBarHeight(value) {
    const { size } = this.props;
    const actualValue = this._sizeLimit.process(value) - size;
    this.value.setValue(actualValue);
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
