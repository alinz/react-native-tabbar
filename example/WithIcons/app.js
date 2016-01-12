import React, { Component, View } from 'react-native';
import Tabbar from './libs/tabbar';
import Tab, { Icon, Content } from './libs/tab';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    // let toggle = true;
    // setInterval(() => {
    //   toggle = !toggle;
    //   this.refs['myTabbar'].getBarRef().show(toggle);
    // }, 1000);
  }

  render() {
    return (
      <Tabbar ref="myTabbar">
        <Tab name="tab1">
          <Icon>
            <View style={{ flex: 1, backgroundColor: 'blue' }}/>
          </Icon>
          <Content>
            <View ref="ali"/>
          </Content>
        </Tab>
        <Tab name="tab2">
          <Icon>
            <View style={{ flex: 1, backgroundColor: 'red' }}/>
          </Icon>
          <Content>
            <View ref="ali"/>
          </Content>
        </Tab>
      </Tabbar>
    );
  }
}
