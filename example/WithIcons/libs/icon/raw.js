import React, { Component, View } from 'react-native';
import Wrapper from './../wrapper'

const extendRawIcon = (ChildComponent) => {
  class RawIcon extends Component {
   constructor(props, context) {
     super(props, context);
   }

   render() {
     const component = ChildComponent? <ChildComponent {...this.props}/> : this.props.children;
     return (
       <View style={{ flex: 1, height: 50 }}>
         <Wrapper ref="wrap">
           {component}
         </Wrapper>
       </View>
     );
   }
  }

  return RawIcon;
}

const RawIcon = extendRawIcon()
export { RawIcon, extendRawIcon };
