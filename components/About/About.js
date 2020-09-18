import React, { Component } from 'react';
import {View, Text} from 'react-native';

const About = props => {

        return(
            <View>
                <Text>About page</Text>
            </View>
        );

};

About['navigationOptions'] = screenProps => ({
    title: 'About'
});

export default About;