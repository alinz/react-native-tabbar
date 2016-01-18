import React, { Component } from 'react-native';
import Tab, { Icon, Content } from './tab';
import { RawIcon } from './icon';

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
      icon: iconComponent
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

    if (tabChild.type !== Tab) {
      throw new Error(`unknown ${tabChild.type.name} component inside Tabbar`);
    }

    if (!tabChild.props.name) {
      throw new Error('all tabs must contains a name');
    }

    if (isNameDuplicated(tabChild.props.name)) {
      throw new Error(`tab name '${tabChild.props.name}' is not unique.`);
    }

    tab.name = tabChild.props.name;
    tab.icon = null;
    tab.content = null;
    tab.contentRef = null;

    React.Children.forEach(tabChild.props.children, (tabItem) => {
      if (tabItem.type.name === 'RawIcon') {
        if (tab.icon) {
          throw new Error('one tab has too many Icon components');
        }
        tab.icon = <InjectTabNameContext key={tab.name} name={tab.name}>{tabItem}</InjectTabNameContext>;
      }
      else if (tabItem.type === Content){
        if (tab.content) {
          throw new Error('one tab has too many Content components');
        }
        tab.content = <InjectTabNameContext key={tab.name} name={tab.name}>{tabItem}</InjectTabNameContext>;
      } else {
        throw new Error(`unknown ${tabItem.type} inside Tab component. It should be either 'Icon' or 'Content'`)
      }
    });

    if (tab.icon == null) {
      throw new Error(`tab ${tab.name} does not have Icon component`);
    }

    if (tab.content == null) {
      throw new Error(`tab ${tab.name} does not have Content component`);
    }

    graphs.push(tab);
  });
  return graphs;
}
