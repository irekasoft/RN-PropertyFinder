import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
    ScrollView
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import SearchResults from './SearchResults';


function urlForQueryAndPage(key, value, pageNumber){

    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber,
    }
    data[key] = value;

    // map function as iteration inside the array
    const querystring = Object.keys(data).map(key => key + '=' + encodeURIComponent(data[key])).join('&');
    console.log(querystring);
    return 'https://api.nestoria.co.uk/api?' + querystring;

}

class SearchPage extends Component {

    state = {
        searchString: 'london',
        isLoading: false,
        message: '',
    }

    componentWillMount(){

        console.log('componentWillMount');

    }

    _onSearchTextChanged = (event) => {

        console.log('_onSearchTextChanged');
        this.setState({ searchString: event.nativeEvent.text });
        console.log('Current: ' + this.state.searchString + ', Next: ' + event.nativeEvent.text);

    };

    _onSearchPressed = () => {

        this.state.message = '';
        const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        this._executeQuery(query);

    };

    _executeQuery = (query) => {

        console.log(query);
        this.setState({ isLoading: true });

        fetch(query)
            .then(response => response.json())
            .then(json => this._handleResponse(json.response))
            .catch(error =>
                this.setState({
                isLoading: false,
                message: 'Something bad happened ' + error
            }));

    };

    _handleResponse = (response) => {

        this.setState({ isLoading: false , message: 'found: ' + response.listings.length });

        if (response.application_response_code.substr(0, 1) === '1') {
            console.log('Properties found: ' + response.listings.length);
        } else {
            this.setState({ message: 'Location not recognized; please try again.'});
        }

        console.log('search page ' + response.listings);
        
        this.setState({ message: '' });

        this.props.navigation.navigate('SearchResults', {  listings: response.listings })
        

    };
      

    render(){

        const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;

        console.log('SearchPage.render');

        return(

            <View style={styles.container}>

                <Image style={styles.image} source = { require('../img/house.png') } />

                <Text style={styles.description}>
                Search for houses to buy!
                </Text>

                <Text style={styles.description}>
                Search by place-name or postcode.
                </Text>

                <View style={styles.flowRight}>
                    <TextInput
                        style={styles.searchInput}
                        value={this.state.searchString}
                        onChange={this._onSearchTextChanged}
                        placeholder='Search via name or postcode'/>
                    <Button
                        color='#48BBEC'
                        title='Search!'
                        onPress={this._onSearchPressed}
                    />
                </View>

                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>

            </View>
        )
    }

}

const styles = {

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
        height: 100,
        width: 110,
    }

}

export default SearchPage;