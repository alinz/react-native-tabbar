import React, { Component, View } from 'react-native';
import { buildTabGraph } from './tab_graph';

//Tabbar
export default class Tabbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tabs: buildTabGraph(props.children)
    };
  }

  renderContents() {
    
  }

  renderIcons() {

  }

  render() {
    return (
      <View style={{ flex: 1 }}>

      </View>
    );
  }
}

Tabbar.propTypes = {
  barSize: React.PropTypes.number
};

Tabbar.defaultProps = {
  barSize: 30
};
