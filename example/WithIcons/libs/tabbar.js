import React, { Component, View } from 'react-native';
import { buildTabGraph } from './tab_graph';
import Normalbar from './bar';

const REF_BAR = 'REF_BAR';

//Tabbar
export default class Tabbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tabs: buildTabGraph(props.children)
    };
  }

  getChildContext() {
    return {
      barSize: this.props.barSize
    };
  }

  getBarRef() {
    return this.refs[REF_BAR];
  }

  renderContents() {

  }

  renderIcons() {
    const { tabs } = this.state;
    return tabs.map((tab) => tab.icon);
  }

  render() {
    const { BarComponent, barSize } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <BarComponent
          ref={REF_BAR}
          size={barSize}>
            {this.renderIcons()}
        </BarComponent>
      </View>
    );
  }
}

Tabbar.propTypes = {
  barSize: React.PropTypes.number,
  BarComponent: React.PropTypes.func
};

Tabbar.defaultProps = {
  barSize: 50,
  BarComponent: Normalbar
};

Tabbar.childContextTypes = {
  barSize: React.PropTypes.number
};
