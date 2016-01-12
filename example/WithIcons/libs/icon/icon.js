import React, { Component, View, Text } from 'react-native';
import { extendRawIcon } from './raw';

class Icon extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Text>Icon</Text>
    );
  }
}

export default extendRawIcon(Icon);
