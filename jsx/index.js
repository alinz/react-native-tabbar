'use strict';

var React = require('react-native');
var styles = require('./styles.js');

var {
  Component,
  View,
  TouchableWithoutFeedback
} = React;

var childernforEach = React.Children.forEach;

function noop() {}

class Tabbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;
    var itemList = [];
    var contentView = null;

    childernforEach(props.children, (item) => {
      var selected = item.props.name == props.selected;
      childernforEach(item.props.children, (node, index) => {
        if (index % 2 == 0) {
          if (selected) {
            contentView = node;
          }
        } else {
          node = React.cloneElement(node, {
            key: item.props.name,
            selected: selected,
            onPress: () => { props.onTabItemPress(item.props.name) }
          });
          itemList.push(node);
        }
      });
    });

    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          {contentView}
        </View>
        <View style={[styles.tabbarView, { height: props.tabHeight }]}>
          {itemList}
        </View>
      </View>
    );
  }
}

Tabbar.propTypes = {
  selected: React.PropTypes.string,
  onTabItemPress: React.PropTypes.func,
  tabHeight: React.PropTypes.number
};

Tabbar.defaultProps = {
  selected: '',
  onTabItemPress: noop,
  tabHeight: 50
};

class Item extends Component {
  constructor(props) {
    super(props);
  }
}

Item.propTypes = {
  name: React.PropTypes.string.isRequired
};

class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;

    return (
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.iconView}>
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Icon.propTypes = {
  onPress: React.PropTypes.func
};

Icon.defaultProps = {
  onPress: noop
};

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;
    return (
      <View style={styles.contentView}>
        {props.children}
      </View>
    );
  }
}

Item.Icon = Icon;
Item.Content = Content;
Tabbar.Item = Item;

module.exports = Tabbar;
