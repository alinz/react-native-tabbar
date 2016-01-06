/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const React = require('react-native');
const {
  Component,
  Dimensions,
  Text,
  View,
} = React;

const window = Dimensions.get('window');

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
      <View style={{ flex: 1}}>
        <Tabbar selected={state.selected}
                onTabItemPress={this.onTabItemPress}
                style={{ borderTopWidth: 1, borderColor: 'hotpink', backgroundColor: 'white' }}
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
            <TestView color="blue"/>
          </Tabbar.Item>
          <Tabbar.Item name="Test 2">
            <TestView color="red"/>
          </Tabbar.Item>
          <Tabbar.Item name="Test 3">
            <TestView color="yellow"/>
          </Tabbar.Item>
        </Tabbar>
      </View>
    );
  }
});

class TestView extends Component {
  render() {
    return <View style={{ position: 'absolute', width: window.width, height: window.height, backgroundColor: this.props.color }}></View>;
  }
}

module.exports = Example;
