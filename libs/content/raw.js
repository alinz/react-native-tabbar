import React, { StyleSheet, Component, View, Animated } from 'react-native';
import { window } from './../util';
import Wrapper from './../wrapper'

const styles = StyleSheet.create({
  content: {
    backgroundColor:'transparent',
    position: 'absolute',
    width: window.width,
    height: window.height
  }
});

const extendRawContent = (ChildComponent) => {
  class RawContent extends Component {
    constructor(props, context) {
      super(props, context);
      this.top = new Animated.Value(window.height);
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
      const component = ChildComponent? <ChildComponent {...this.props}/> : this.props.children;
      return (
        <Animated.View style={[styles.content, { top: this.top }]}>
          <Wrapper ref="wrap">
            {component}
          </Wrapper>
        </Animated.View>
      );
    }
  }

  RawContent.contextTypes = {
    registerTabContent: React.PropTypes.func,
    tabName: React.PropTypes.string
  };

  return RawContent;
}

const RawContent = extendRawContent()
export { RawContent, extendRawContent };
