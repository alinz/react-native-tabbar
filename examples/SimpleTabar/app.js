/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Bar, Tab, tabItemFor } from './lib'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

@tabItemFor(View).atIndex(1)
class SimpleTabar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Bar size={100} location="top" style={{ backgroundColor: 'red' }}/>
        <Bar location="bottom" style={{ backgroundColor: 'green' }}>
        </Bar>
      </View>
    );
  }
}

AppRegistry.registerComponent('SimpleTabar', () => SimpleTabar);
