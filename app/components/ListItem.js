import React, {Component} from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';

const ListItem = ({ onPress, item, index }) => {

  const price = item.price_formatted;

  return (
      <TouchableHighlight
        // onPress = {this._cellDidPress}
        onPress = { ()=> onPress(index) }
        underlayColor='#dddddd'>

        <View>          
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: item.img_url }} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{item.title}</Text>
            </View>
          </View>

          <View style={styles.separator}/>

        </View>

      </TouchableHighlight>
  );
    
  
};

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

export default ListItem;