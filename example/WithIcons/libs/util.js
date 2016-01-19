import React, { Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');

//TODO: this is the hack, it needs to be replaced with a proper way to return a
//proper height value for android
//this magic number represents the height of tool bar provided by android os.
const androidMagicNumber = 24;
const correctWindowHeight = () => ({
  width: window.width,
  height: Platform.OS === 'ios'? window.height : window.height - androidMagicNumber
});

const glypyMapMaker = (glypy) => Object.keys(glypy).map((key) => {
  return {
    key,
    value: String.fromCharCode(parseInt(glypy[key], 16))
  };
}).reduce((map, glypy) => {
  map[glypy.key] = glypy.value
  return map;
}, {});

module.exports = {
  window: correctWindowHeight(),
  glypyMapMaker
};
