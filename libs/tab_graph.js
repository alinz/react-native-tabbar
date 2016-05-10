import React, { Component } from 'react';
import Tabbar from './tabbar';
import Tab from './tab';
import { RawIcon } from './icon';
import { RawContent } from './content';

class InjectTabNameContext extends Component {
  constructor(props, context) {
    super(props, context);
  }

  getChildContext() {
    return {
      tabName: this.props.name
    };
  }

  render() {
    const value = this.props.children;
    return value;
  }
}

InjectTabNameContext.childContextTypes = {
  tabName: React.PropTypes.string
};

InjectTabNameContext.propTypes = {
  name: React.PropTypes.string.isRequired
};

//this fuction tries to validated and created an array of tab graph with the
//following formats
/*
  [
    {
      name:
      content: contentComponent,
      icon: iconComponent,
      contentRef: {show, hide} reference to content to call lifecycle events
    },
    ...
  ]
*/
export const buildTabGraph = (children, tabs) => {
  let graphs = [];

  const isNameDuplicated = (() => {
    let map = {};
    return (name) => {
      if (map[name]) {
        return true;
      }
      map[name] = true;
      return false;
    }
  })();

  React.Children.forEach(children, (tabChild) => {
    let tab = {};

    if (__DEV__ && tabChild.type !== Tab) {
      throw new Error(`unknown ${tabChild.type.name} component inside Tabbar`);
    }

    if (__DEV__ && !tabChild.props.name) {
      throw new Error('all tabs must contains a name');
    }

    if (__DEV__ && isNameDuplicated(tabChild.props.name)) {
      throw new Error(`tab name '${tabChild.props.name}' is not unique.`);
    }

    tab.name = tabChild.props.name;
    tab.icon = null;
    tab.content = null;
    tab.contentRef = null;

    React.Children.forEach(tabChild.props.children, (tabItem) => {
      if (tabItem.type.displayName === 'RawIcon') {
        if (__DEV__ && tab.icon) {
          throw new Error('one tab has too many Icon components');
        }
        tab.icon = <InjectTabNameContext key={tab.name} name={tab.name}>{tabItem}</InjectTabNameContext>;
      }
      else if (tabItem.type.displayName === 'RawContent'){
        if (__DEV__ && tab.content) {
          throw new Error('one tab has too many RawContent components');
        }
        tab.content = <InjectTabNameContext key={tab.name} name={tab.name}>{tabItem}</InjectTabNameContext>;
      } else {
        if (__DEV__) {
          throw new Error(`unknown ${tabItem.type} inside Tab component. It should be either 'Icon' or 'Content'`);
        }
      }
    });

    if (__DEV__ && tab.icon == null) {
      throw new Error(`tab ${tab.name} does not have Icon component`);
    }

    if (__DEV__ && tab.content == null) {
      throw new Error(`tab ${tab.name} does not have RawContent component`);
    }

    graphs.push(tab);
  });
  return graphs;
}
