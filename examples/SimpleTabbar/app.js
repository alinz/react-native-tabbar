import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Tabbar from 'react-native-tabbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollViewContainer: {
    height: 5000,
  },
  scrollView: {
    backgroundColor: 'yellow'
  }
})

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.tabarRef = null
  }

  onScroll = (evt) => {
    const y = evt.nativeEvent.contentOffset.y
    this.tabarRef.updateHeight(y)
  }

  renderTabs() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'green' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Item 1</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Item 2</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Item 3</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Item 4</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Item 5</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          style={styles.scrollView}
          onScroll={this.onScroll}
          scrollEventThrottle={16}>
          <Text>This is the content</Text>
        </ScrollView>
        <Tabbar show={true}
                disable={false}
                ref={(ref) => this.tabarRef = ref}
                style={{ backgroundColor: 'red' }}>
          {this.renderTabs()}
        </Tabbar>
      </View>
    );
  }
}
