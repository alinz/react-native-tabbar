/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Tabbar = require('react-native-tabbar');
var Item = Tabbar.Item;

var FreeTabbar = React.createClass({

  getInitialState: function () {
    return {
      selected: 'test1'
    };
  },

  onTabItemPress: function (name) {
    console.log(`click on ${name} item`);
    this.setState({
      selected: name
    });
  },

  render: function() {
    var state = this.state;

    return (
      <Tabbar selected={state.selected} onTabItemPress={this.onTabItemPress}>
        <Item name="test1">
          <Item.Content>
            <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
          </Item.Content>
          <Item.Icon>
              <Text>Test1 Icon</Text>
          </Item.Icon>
        </Item>
        <Item name="test2">
          <Item.Content>
            <View style={{ flex: 1, backgroundColor: 'red' }}></View>
          </Item.Content>
          <Item.Icon>
              <Text>Test2 Icon</Text>
          </Item.Icon>
        </Item>
        <Item name="test3">
          <Item.Content>
            <View style={{backgroundColor: 'yellow' }}></View>
          </Item.Content>
          <Item.Icon>
              <Text>Test3 Icon</Text>
          </Item.Icon>
        </Item>
      </Tabbar>
    );
  }
});

AppRegistry.registerComponent('FreeTabbar', () => FreeTabbar);
