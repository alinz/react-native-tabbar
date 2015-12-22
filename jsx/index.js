'use strict';

const React = require('react-native');
const styles = require('./styles');

const {
  Component,
  View,
  Text,
  TouchableWithoutFeedback
} = React;

class Tabbar extends Component {
  render() {
    const contents = this._generateContents();
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          { contents.views }
        </View>
        <View style={[styles.tabbarView, this.props.style]}>
          { contents.tabs }
        </View>
      </View>
    );
  }

  _generateContents() {
    const {
      children,
      onTabItemPress,
      renderTabComponent,
      selected,
      tabHeight
    } = this.props;

    return children.reduce((accum, originalChild) => {
      const { children: originChildChildren, name } = originalChild.props;
      const isActive = name === selected;
      const tabView = renderTabComponent(name, isActive);

      accum.views.push(
        React.cloneElement(originChildChildren, {
          key: `view:${name}`,
          style: [originChildChildren.props.style, isActive ? null: styles.contentViewHidden]
      }));

      accum.tabs.push(
        <TouchableWithoutFeedback key={`tab:${name}`} onPress={() => onTabItemPress(name)}>
          {
            React.cloneElement(tabView, {
              style: [styles.tabView, tabView.props.style],
              height: tabHeight
            })
          }
        </TouchableWithoutFeedback>
      );

      return accum;
    }, { views: [], tabs: [] });
  }
}

Tabbar.propTypes = {
  selected: React.PropTypes.string.isRequired,
  onTabItemPress: React.PropTypes.func.isRequired,
  tabHeight: React.PropTypes.number,
  renderTabComponent: React.PropTypes.func
};

Tabbar.defaultProps = {
  selected: '',
  tabHeight: 50,
  renderTabComponent: (label, isActive) => <View style={styles.tabView}><Text>{ label }</Text></View>
};

Tabbar.Item = View;

module.exports = Tabbar;
