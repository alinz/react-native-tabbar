/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const React = require('react-native');
const {
  Text,
  View,
} = React;

const Tabbar = require('react-native-tabbar');

const Example = React.createClass({
  getInitialState: function () {
    return {
      selected: 'Test 1'
    };
  },

  onTabItemPress: function (name) {
    console.log(`click on ${name} item`);
    this.setState({
      selected: name
    });
  },

  render: function() {
    const state = this.state;

    return (
      <Tabbar selected={state.selected}
              onTabItemPress={this.onTabItemPress}
              style={{ borderTopWidth: 1, borderColor: 'hotpink' }}
              renderTabComponent={(name, isActive) => (
                <View
                    style={[
                      { borderTopWidth: 5, justifyContent: 'center', alignItems: 'center' },
                      isActive ? { borderColor: 'hotpink'} : { borderColor: 'transparent' }
                    ]}>
                  <Text style={isActive ? { color: 'hotpink' } : null}>{ name }</Text>
                </View>
              )}>
        <Tabbar.Item name="Test 1">
          <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
        </Tabbar.Item>
        <Tabbar.Item name="Test 2">
          <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        </Tabbar.Item>
        <Tabbar.Item name="Test 3">
          <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
        </Tabbar.Item>
      </Tabbar>
    );
  }
});

module.exports = Example;
