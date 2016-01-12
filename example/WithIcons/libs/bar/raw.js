import React, { Component, Animated } from 'react-native';

export default class Rawbar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { children, outerBarStyle, innerBarStyle } = this.props;

    const child = innerBarStyle? ( <Animated.View style={innerBarStyle}>
                                    {children}
                                   </Animated.View> ) : children;
    return (
      <Animated.View style={outerBarStyle}>
        {child}
      </Animated.View>
    );
  }
}

Rawbar.propTypes = {
  outerBarStyle: React.PropTypes.any.isRequired,
  innerBarStyle: React.PropTypes.any
};
