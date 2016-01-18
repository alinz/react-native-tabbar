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
    //   toggle = toggle == "tab2"? "tab3" : "tab2";
    // }, 1000);
    //
    //
    //
    // let toggleShow = true;
    // setInterval(() => {
    //   toggleShow = !toggleShow;
    //   this.refs['myTabbar'].getBarRef().show(toggleShow);
    // }, 200);


    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab('tab2');
    // }, 2000);
    //
    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab("tab3");
    // }, 4000);
  }

  render() {
    return (
      <Tabbar ref="myTabbar">
        <Tabbar.Tab name="tab1">
          <Icon label="Tab 1" icon/>
          <RawContent>
            <View ref="view2" style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('clicked me')}>Click Me</Text>
            </View>
          </RawContent>
        </Tabbar.Tab>
        <Tabbar.Tab name="tab2">
          <Icon label="Tab 2"/>
          <RawContent>
            <View ref="view2" style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('clicked me')}>Click Me</Text>
            </View>
          </RawContent>
        </Tabbar.Tab>
        <Tabbar.Tab name="tab3">
          <RawIcon>
            <View style={{ flex: 1, backgroundColor: 'blue' }}/>
          </RawIcon>
          <RawContent>
            <View ref="view2" style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('clicked me')}>Click Me</Text>
            </View>
          </RawContent>
        </Tabbar.Tab>
      </Tabbar>
    );
  }
}
