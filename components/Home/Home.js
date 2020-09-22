import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render(){

        return(
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                        image={require('../images/chooseYourMeal.jpg')}>
                        <Text style={styles.cardHeader}>Choose Your Meal!</Text>
                    </Card>
                </Animatable.View>
                <Animatable.View animation='fadeInLeft' duration={2000} delay={1000}>
                    <Card
                        image={require('../images/weDeliver.jpg')}>
                        <Text style={styles.cardHeader}>We Deliver!</Text>
                    </Card>
                </Animatable.View>
                <Animatable.View animation='fadeInRight' duration={2000} delay={1000}>
                    <Card
                        image={require('../images/heatThemUp.jpg')}>
                        <Text style={styles.cardHeader}>Heat Them Up!</Text>
                    </Card>
                </Animatable.View>
                <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
                    <Card
                        image={require('../images/eatIt.jpg')}>
                        <Text style={styles.cardHeader}>Eat It!</Text>
                    </Card>
                </Animatable.View>
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