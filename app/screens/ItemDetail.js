'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  TextInput,
  Button,
} from 'react-native';


class ItemDetail extends Component {
    
    constructor(props){
      super(props);
      this.state = {
          searchString: 'london',
          isLoading: false,
          message: '',
      }


      console.log('something here' + this.props.navigation.state.params.house.title );

    }


    render(){
      return (
        <View style={styles.container}>

            <Text style={styles.description}>
            {this.props.navigation.state.params.house.title}
            
            </Text>
            <View style={styles.flowRight}>
            
            </View>
            <Image source={require('../img/house.png') } />
            
            <Text style={styles.description}>
            {this.props.navigation.state.params.house.price}
            </Text>
        </View>
      );
    }
  
  }
  
  const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
      },
      container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
      },
      flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
      },
      image: {
          width: 217,
          height: 138
      }
})

export default ItemDetail;