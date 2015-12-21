'use strict';

var React = require('react-native');
var { StyleSheet } = React;

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
  }
});

module.exports = styles;
