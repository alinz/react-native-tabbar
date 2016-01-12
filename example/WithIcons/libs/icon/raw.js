import React, { Component, View } from 'react-native';
import Wrapper from './../wrapper'

const extendRawIcon = (ChildComponent) => {
  class RawIcon extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      const component = ChildComponent? <ChildComponent {...this.props}/> : this.props.children;
      const { barSize } = this.context;

      return (
        <View style={{ flex: 1, height: barSize }}>
          <Wrapper ref="wrap">
            {component}
          </Wrapper>
        </View>
      );
    }
  }

  RawIcon.contextTypes = {
    barSize: React.PropTypes.number
  };

  return RawIcon;
}

const RawIcon = extendRawIcon()
export { RawIcon, extendRawIcon };
