import React, { Component } from 'react';
import { View } from 'react-native';
import Wrapper from './../wrapper'

const extendRawIcon = (ChildComponent) => {
  class RawIcon extends Component {
    constructor(props, context) {
      super(props, context);
    }

    registerIcon() {

    }

    componentDidMount() {
      const { tabName, registerTabIcon } = this.context;
      if (registerTabIcon) {
        registerTabIcon({
          active: () => {
            const ref = this.refs['wrap'].getWrappedRef();
            if (ref.tabDidActive) {
              ref.tabDidActive();
            }
          },
          inactive: () => {
            const ref = this.refs['wrap'].getWrappedRef();
            if (ref.tabDidInactive) {
              ref.tabDidInactive();
            }
          }
        }, tabName);
      }
    }

    render() {
      const component = ChildComponent? <ChildComponent {...this.props}/> : this.props.children;
      const { barSize } = this.context;

      return (
        <View style={{ overflow: 'hidden', flex: 1, height: barSize }}>
          <Wrapper ref="wrap">
            {component}
          </Wrapper>
        </View>
      );
    }
  }

  RawIcon.contextTypes = {
    barSize: React.PropTypes.number,
    tabName: React.PropTypes.string,
    registerTabIcon: React.PropTypes.func
  };

  RawIcon.displayName = "RawIcon";

  return RawIcon;
}

const RawIcon = extendRawIcon()
export { RawIcon, extendRawIcon };
