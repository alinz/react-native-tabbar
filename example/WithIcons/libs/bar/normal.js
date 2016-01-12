import React, { StyleSheet, Component } from 'react-native';
import Dynamicbar from './dynamic';
import { window } from './../util';

const styles = StyleSheet.create({
  bar: {
    overflow: 'hidden',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width
  }
});

export default class Normalbar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  show(enable) {
    this.refs['dynamic'].show(enable, this.props.duration);
  }

  render() {
    const { children, size, backgroundColor } = this.props;
    const { width, height } = window;

    return (
      <Dynamicbar
        ref="dynamic"
        size={size}
        style={[styles.bar, { width, backgroundColor }]}>
        {children}
      </Dynamicbar>
    )
  }
}

Normalbar.propTypes = {
  size: React.PropTypes.number,
  duration: React.PropTypes.number,
  backgroundColor: React.PropTypes.string
};

Normalbar.defaultProps = {
  duration: 200,
  backgroundColor: 'gray'
};
