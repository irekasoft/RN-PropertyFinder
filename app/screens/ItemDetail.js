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
            <Image style={styles.image} source={{ uri : this.props.navigation.state.params.house.img_url }} />
            
            <Text style={styles.description}>
              {this.props.navigation.state.params.house.title}
            </Text>
            <View style={styles.flowRight}>
              
            </View>
            
            
            <Text style={styles.description}>
              Price: {this.props.navigation.state.params.house.price}
            </Text>
        </View>
      );
    }
  
  }
  
const styles = {
  

  container: {
    padding: 30,
    marginTop: 0,
    alignItems: 'center'
  },

  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  

  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  
  image: {
    height: 300,
    width: 300,
  }
}

export default ItemDetail;