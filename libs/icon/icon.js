import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { extendRawIcon } from './raw';

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class Icon extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: false
    };
  }

  onPress() {
    const { tabName, gotoTab } = this.context;
    gotoTab(tabName);
  }

  tabDidActive() {
    this.setState({ selected: true });
    //console.log(`tab ${this.context.tabName} is active`);
  }

  tabDidInactive() {
    this.setState({ selected: false });
    //console.log(`tab ${this.context.tabName} is inactive`);
  }

  render() {
    const { label, type, from, size, iconStyle, onActiveColor, onInactiveColor, ...rest } = this.props;
    const { selected } = this.state;

    const color = selected? onActiveColor : onInactiveColor

    let icon = null;
    if (!!type && !from) {
      throw new Error("icon must contains 'type' and 'from' values");
    } else if (!type && !!from) {
      throw new Error("icon must contains 'type' and 'from' values");
    } else if (!!type && !!from) {
      icon = (
        <Text style={[iconStyle, { fontSize: size, fontFamily: from, color: color }]}>
          {type}
        </Text>
      );
    }

    return (
      <TouchableWithoutFeedback {...rest} style={{ flex: 1 }} onPress={this.onPress.bind(this)}>
        <View style={styles.icon}>
          {icon}
          <View style={{ paddingTop: 5 }}>
            <Text style={{ fontSize: 12, color: color }}>{label}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Icon.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  from: React.PropTypes.string,
  size: React.PropTypes.number,
  iconStyle: React.PropTypes.any,
  onActiveColor: React.PropTypes.string,
  onInactiveColor: React.PropTypes.string
};

Icon.defaultProps = {
  size: 20,
  onActiveColor: 'white',
  onInactiveColor: 'black'
};

Icon.contextTypes = {
  tabName: React.PropTypes.string,
  gotoTab: React.PropTypes.func
};

export default extendRawIcon(Icon);
