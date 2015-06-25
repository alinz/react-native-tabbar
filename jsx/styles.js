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
    alignItems: 'center'
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
  },
  contentView: {
    flex: 1
  }
});

module.exports = styles;
