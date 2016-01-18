import React, { StyleSheet, Component, View, Text, TouchableOpacity } from 'react-native';
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
  }

  onPress() {
    const { tabName, gotoTab } = this.context;
    gotoTab(tabName);
  }

  tabDidActive() {
    console.log(`tab ${this.context.tabName} is active`);
  }

  tabDidInactive() {
    console.log(`tab ${this.context.tabName} is inactive`);
  }

  render() {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={this.onPress.bind(this)}>
        <View style={styles.icon}>
          <Text>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Icon.propTypes = {
  label: React.PropTypes.string
};

Icon.contextTypes = {
  tabName: React.PropTypes.string,
  gotoTab: React.PropTypes.func
};

export default extendRawIcon(Icon);
