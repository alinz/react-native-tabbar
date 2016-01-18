import React, { Component, View } from 'react-native';
import { buildTabGraph } from './tab_graph';
import Normalbar from './bar';

const REF_BAR = 'REF_BAR';

//Tabbar
export default class Tabbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.prevContentRef = null;
    this.state = {
      tabs: buildTabGraph(props.children),
      activeTab: ''
    };
  }

  getChildContext() {
    return {
      barSize: this.props.barSize,
      //we need this to let the content register show and hide method
      registerTabContent: this.registerTabContent.bind(this),
      gotoTab: this.gotoTab.bind(this)
    };
  }

  registerTabContent(ref, tabName) {
    this.state.tabs.some((tab) => {
      if (tab.name === tabName) {
        tab.contentRef = ref;
        return true;
      }
    });
  }

  getBarRef() {
    return this.refs[REF_BAR];
  }

  gotoTab(tabName) {
    this.state.tabs.some((tab) => {
      if (tab.name !== tabName) {
        return false;
      }

      if (this.prevContentRef !== tab.contentRef) {
        if (this.prevContentRef) {
          this.prevContentRef.hide();
        }
        tab.contentRef.show();
        this.prevContentRef = tab.contentRef;
      }

      return true
    });
  }

  renderContents() {
    const { tabs } = this.state;
    return tabs.map((tab, index) => tab.content);
  }

  renderIcons() {
    const { tabs } = this.state;
    return tabs.map((tab) => tab.icon);
  }

  componentDidMount() {
    let { initialTab } = this.props;
    //it means that we need to get the first tab name
    if (initialTab === "") {
      initialTab = this.state.tabs[0].name;
    }
    this.gotoTab(initialTab);
  }

  render() {
    const { BarComponent, barSize } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {this.renderContents()}
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
  BarComponent: React.PropTypes.func,
  initialTab: React.PropTypes.string
};

Tabbar.defaultProps = {
  barSize: 50,
  BarComponent: Normalbar,
  initialTab: ""
};

Tabbar.childContextTypes = {
  barSize: React.PropTypes.number,
  registerTabContent: React.PropTypes.func,
  gotoTab: React.PropTypes.func
};
