import React, { Component } from 'react';
import {ScrollView, Text} from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render(){

        return(
            <ScrollView>
                <Text>Home page</Text>
            </ScrollView>
        );

    }

};

export default Home;