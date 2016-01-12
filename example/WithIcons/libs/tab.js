import React, { Component, View } from 'react-native';
import { window } from './util';
import Wrapper from './wrapper'

 export class Icon extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { selected, children } = this.props;
    return (
      <View style={{ flex: 1, height: 50 }}>
        <Wrapper ref="wrap">
          {children}
        </Wrapper>
      </View>
    );
  }
}

export class Content extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { selected, children } = this.props;
    return (
      <View style={{ position: 'absolute', width: window.width, height: window.height }}>
        <Wrapper ref="wrap">
          {children}
        </Wrapper>
      </View>
    );
  }
}


export default class Tab extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return null;
  }
}
