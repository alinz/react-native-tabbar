## react-native-tabbar

React-Native Tab bar with more freedom

### Introduction

So to make story short I didn't like react-native Tabbar base component. It is very basic and it doesn't support custom icons. Then after couple of weeks, (react-native-icons)[https://github.com/corymsmith/react-native-icons] came with a lot of new features such as Custom icons, and I loved it. It served me pretty well until my requirement changed. Now I have to support multiple layers of icons, custom image and custom view for each icon. Unfortunately, (react-native-icons)[https://github.com/corymsmith/react-native-icons] doesn't support custom image yet. So I decided to create a universal module which technically can work on both iOS and Android version of `react-native`.

### Installation

```bash
npm install react-native-tabbar
```

### Usage

I've broken down the whole things into 4 major component

#### Tabbar

`Tabbar` component is the main component which wraps everything and provides 3 props, `selected`, `onTabItemPress` and `tabHeight`.

#### Tabbar.Item

Each Item must have a name. So each item should pass a unique `name` to item. This name is being passed back to `onTabItemPress` callback function registered at `Tabbar`.

`Item` has 2 components. `Icon` and `Content`. Order of these two component does not mater. `Icon` component is for tab icon and `Content` is for the tab content.

#### Tabbar.Item.Icon
#### Tabbar.Item.Content

Please refer to example folder.
