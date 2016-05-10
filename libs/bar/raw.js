import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Rawbar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { children, style } = this.props;

    return (
      <Animated.View style={style}>
        {children}
      </Animated.View>
    );
  }
}

Rawbar.propTypes = {
  style: React.PropTypes.any.isRequired
};
