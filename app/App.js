'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import SearchPage from './screens/SearchPage'
import SearchResults from './screens/SearchResults';
import ItemDetail from './screens/ItemDetail';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootNavigator = StackNavigator({
  
  Home: {
    screen: SearchPage,
    navigationOptions: {
      headerTitle: 'Property Finder',
    },
  },

  SearchResults: {
    screen: SearchResults,
    navigationOptions: {
      headerTitle: 'Results',
    },
  },

  ItemDetail: {
    screen: ItemDetail,
    navigationOptions: {
      headerTitle: 'Item Detail',
    },
  },
  
});

const styles = StyleSheet.create({

  description: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    justifyContent: 'center',
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  container: {
    flex: 1,
  },
  
});

export default RootNavigator;