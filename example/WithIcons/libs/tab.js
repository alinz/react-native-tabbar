import React, { StyleSheet, Component, View, Animated } from 'react-native';
import { window } from './util';
import Wrapper from './wrapper'

const styles = StyleSheet.create({
  content: {
    backgroundColor:'transparent',
    position: 'absolute',
    width: window.width,
    height: window.height
  }
})

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
    this.top = new Animated.Value(0);
  }

  componentDidMount() {
    const { registerTabContent, tabName } = this.context;

    registerTabContent({
      show: this.show.bind(this),
      hide: this.hide.bind(this)
    }, tabName);
  }

  show() {
    const ref = this.refs['wrap'].getWrappedRef();
    if (ref.tabWillFocus) {
      ref.tabWillFocus();
    }
    this.top.setValue(0);
    if (ref.tabDidFocus) {
      ref.tabDidFocus()
    }
  }

  hide() {
    const ref = this.refs['wrap'].getWrappedRef();
    if (ref.tabWillBlur) {
      ref.tabWillBlur();
    }
    this.top.setValue(window.height);
    if (ref.tabDidBlur) {
      ref.tabDidBlur()
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Animated.View style={[styles.content, { top: this.top }]}>
        <Wrapper ref="wrap">
          {children}
        </Wrapper>
      </Animated.View>
    );
  }
}

Content.contextTypes = {
  registerTabContent: React.PropTypes.func,
  tabName: React.PropTypes.string
};

export default class Tab extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return null;
  }
}
