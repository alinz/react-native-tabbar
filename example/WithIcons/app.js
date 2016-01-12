import React, { Component, View } from 'react-native';
import Tabbar from './libs/tabbar';
import Tab, { Icon, Content } from './libs/tab';


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Tabbar>
        <Tab name="tab1">
          <Icon>
            <View/>
          </Icon>
          <Content>
            <View ref="ali"/>
          </Content>
        </Tab>
        <Tab name="tab2">
          <Icon><View/></Icon>
          <Content><View/></Content>
        </Tab>
        <Tab name="tab3">
          <Icon><View/></Icon>
          <Content><View/></Content>
        </Tab>
      </Tabbar>
    );
  }
}
