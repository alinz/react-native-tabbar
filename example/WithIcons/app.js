import React, { Component, View } from 'react-native';
import Tabbar from './libs/tabbar';
import Tab, { Content } from './libs/tab';
import { RawIcon, Icon } from './libs/icon';


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
          <Icon label="my label"/>
          <Content>
            <View ref="ali"/>
          </Content>
        </Tab>
        <Tab name="tab2">
          <RawIcon>
            <View style={{ flex: 1, backgroundColor: 'red' }}/>
          </RawIcon>
          <Content>
            <View style={{ flex: 1, backgroundColor: 'blue' }}/>
          </Content>
        </Tab>
      </Tabbar>
    );
  }
}
