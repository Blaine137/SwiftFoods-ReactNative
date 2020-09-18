import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { Card } from 'react-native-elements';


class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render(){

        return(
            <ScrollView>
                <Card
                    image={require('../images/chooseYourMeal.jpg')}>
                    <Text style={styles.cardHeader}>Choose Your Meal!</Text>
                </Card>
                <Card
                    image={require('../images/weDeliver.jpg')}>
                    <Text style={styles.cardHeader}>We Deliver!</Text>
                </Card>
                <Card
                    image={require('../images/heatThemUp.jpg')}>
                    <Text style={styles.cardHeader}>Heat Them Up!</Text>
                </Card>
                <Card
                    image={require('../images/eatIt.jpg')}>
                    <Text style={styles.cardHeader}>Eat It!</Text>
                </Card>
            </ScrollView>
        );

    }

};

const styles = StyleSheet.create({
    cardHeader: {
        color: '#574AE2',
        fontSize: 24,
        textAlign: 'center'
    }
});

export default Home;