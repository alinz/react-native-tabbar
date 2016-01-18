import React, { Component, View, Text } from 'react-native';
import Tabbar from './libs/tabbar';
import { RawContent } from './libs/content';
import { RawIcon, Icon } from './libs/icon';


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    // let toggle = "tab2";
    // setInterval(() => {
    //   console.log(`goto ${toggle}`);
    //   this.refs['myTabbar'].gotoTab(toggle);
    //   toggle = toggle == "tab2"? "tab1" : "tab2";
    // }, 1000);
    //
    //
    //
    // let toggleShow = true;
    // setInterval(() => {
    //   toggleShow = !toggleShow;
    //   this.refs['myTabbar'].getBarRef().show(toggleShow);
    // }, 200);
  }

  render() {
    return (
      <Tabbar ref="myTabbar">
        <Tabbar.Tab name="tab1">
          <Icon label="my label"/>
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'yellow' }}/>
          </RawContent>
        </Tabbar.Tab>
        <Tabbar.Tab name="tab2">
          <RawIcon>
            <View style={{ overflow:'hidden', flex: 1, backgroundColor: 'red' }}/>
          </RawIcon>
          <RawContent>
            <View ref="view2" style={{ flex: 1, backgroundColor: 'red' }}>

            </View>
          </RawContent>
        </Tabbar.Tab>
      </Tabbar>
    );
  }
}
