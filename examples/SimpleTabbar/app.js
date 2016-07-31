import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Tabbar from 'react-native-tabbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollViewContainer: {
    height: 1000,
  },
  scrollView: {
    backgroundColor: 'yellow'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.tabarRef = null
    this.state = {
      tab: 'item1'
    }
  }

  onScroll = (evt) => {
    const y = evt.nativeEvent.contentOffset.y
    this.tabarRef.updateHeight(y)
  }

  onTabSelect(tab) {
    this.setState({ tab })
  }

  renderTabs() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'green' }}>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.onTabSelect('item1')}>
          <View>
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('item2')}>
          <View>
            <Text>Item 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('item3')}>
          <View>
            <Text>Item 3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('item4')}>
          <View>
            <Text>Item 4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('item5')}>
          <View>
            <Text>Item 5</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderContent() {
    const { tab } = this.state
    let content
    switch(tab) {
      case 'item1':
        content = <Text>This is the content 1</Text>
        break
      case 'item2':
        content = <Text>This is the content 2</Text>
        break
      case 'item3':
        content = <Text>This is the content 3</Text>
        break
      case 'item4':
        content = <Text>This is the content 4</Text>
        break
      case 'item5':
        content = <Text>This is the content 5</Text>
        break
    }

    return content
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          style={styles.scrollView}
          onScroll={this.onScroll}
          scrollEventThrottle={16}>
          <View style={{ paddingTop: 30 }}>
            {this.renderContent()}
          </View>
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
