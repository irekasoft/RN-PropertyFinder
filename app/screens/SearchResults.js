import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ListItem from '../components/ListItem';

import ItemDetail from './ItemDetail';

class SearchResults extends Component {


  constructor(props){
    super(props);
    console.log('something here' + this.props.navigation.state.params.listings );

  }

  _cellDidPress = () => {

    //this.props.onPressItem(this.props.index);

  }


  _keyExtractor = (item, index) => index;
    
  onPressCell = (index) => {

      console.log("Pressed row: " + index);

      var house = this.props.navigation.state.params.listings[index];

      console.log("house: " + house.title);

      this.props.navigation.navigate('ItemDetail', { house: house });

  };

  renderCell = ({item, index}) => (
    <ListItem

        onPress = {this.onPressCell.bind(this)} //{this._cellDidPress}    
        item={item}
        index={index}

    />
  );

  render() {

    return (
      <FlatList
        data = {this.props.navigation.state.params.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderCell}
        onPressItem={this.onPressCell}
      />
    );

  }

}

const styles = {
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
};

export default SearchResults;