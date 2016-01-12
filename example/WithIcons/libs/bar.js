import React, { Component, View } from 'react-native';
import { window } from './util';

//Bar component is component that shows the bar.
//what it does is show or hide bar.
class Bar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { width, height, children } = this.props;
    return (
      <View style={{ position: 'absolute', width, height, top: window.height - height}}>
        {children}
      </View>
    );
  }
}

Bar.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
};
