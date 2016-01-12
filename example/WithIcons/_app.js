'use strict';

import React, { Component } from 'react-native';
import Tabbar from './libs';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Tabbar ref="tabbar">
        <Tab name="home">
          <Tab.Icon>
            
          </Tab.Icon>
          <Tab.Content></Tab.Content>
        </Tab>
      </Tabbar>
    );
  }
}
