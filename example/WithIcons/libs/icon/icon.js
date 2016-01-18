import React, { StyleSheet, Component, View, Text } from 'react-native';
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

  render() {
    return (
      <View style={styles.icon}>
        <Text>{this.props.label}</Text>
      </View>
    );
  }
}

Icon.propTypes = {
  label: React.PropTypes.string
}

export default extendRawIcon(Icon);
