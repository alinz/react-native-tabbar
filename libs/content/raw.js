import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Wrapper from './../wrapper'

const styles = StyleSheet.create({
  show: {
    flex: 1,
    position: 'relative',
    backgroundColor:'transparent'
  },
  hide: {
    position: 'absolute',
    top: 10000
  }
});

const extendRawContent = (ChildComponent) => {
  class RawContent extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        display: styles.hide
      };
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
      this.setNewStyle(styles.show);
      if (ref.tabDidFocus) {
        ref.tabDidFocus()
      }
    }

    hide() {
      const ref = this.refs['wrap'].getWrappedRef();
      if (ref.tabWillBlur) {
        ref.tabWillBlur();
      }
      this.setNewStyle(styles.hide);
      if (ref.tabDidBlur) {
        ref.tabDidBlur()
      }
    }

    setNewStyle(style) {
      this.setState({ display: style });
    }

    render() {
      const component = ChildComponent? <ChildComponent {...this.props}/> : this.props.children;
      const { display } = this.state;
      return (
        <View ref="tabContent" style={display}>
          <Wrapper ref="wrap">
            {component}
          </Wrapper>
        </View>
      );
    }
  }

  RawContent.contextTypes = {
    registerTabContent: React.PropTypes.func,
    tabName: React.PropTypes.string
  };

  RawContent.displayName = 'RawContent';

  return RawContent;
}

const RawContent = extendRawContent()
export { RawContent, extendRawContent };
