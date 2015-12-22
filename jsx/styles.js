'use strict';

var React = require('react-native');
var { StyleSheet, Dimensions } = React;
const WINDOW_HEIGHT = Dimensions.get('window').height;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbarView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentView: {
    flex: 1
  },
  // Move the view outside of the current viewport.
  contentViewHidden: {
    position: 'absolute',
    top: WINDOW_HEIGHT
  }
});

module.exports = styles;
