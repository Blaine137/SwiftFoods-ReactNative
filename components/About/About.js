import React, { Component } from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const About = props => {

        return(
            <ScrollView>
                <View style={styles.flexContainer}>
                    <View style={styles.flexOne}>
                        <Text style={styles.header}>Our Mission</Text>
                    </View>
                    <View style={styles.flexTwo}>
                        <Text style={styles.text}>We strive to keep our customers fed with little to no effort. if you are not satisfied with out product, we will refund your money!</Text>
                    </View>
                </View>
                <View style={styles.flexContainer}>
                    <View style={styles.flexTwo}>
                        <Text style={styles.text}>Here at Swift Foods, we provide the highest quality food. Our food contains less sugar, less processes, and more nutrients that is ready in three minutes!</Text>
                    </View>
                    <View style={styles.flexOne}>
                        <Text style={styles.header}>Our Food</Text>
                    </View>
                </View>
                <View style={styles.flexContainer}>
                    <View style={styles.flexOne}>
                        <Text style={styles.header}>Why Swift Foods?</Text>
                    </View>
                    <View style={styles.flexTwo}>
                        <Text style={styles.text}>When it comes time to eat, you have many options. Foods offer convenience, nutrion, and cravings. At Swift Foods, we offer all three for a price you cannot beat!</Text>
                    </View>
                </View>
            </ScrollView>
        );

};

About['navigationOptions'] = screenProps => ({
    title: 'About'
});

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 48,
        paddingBottom: 48,
        borderBottomWidth: 2,
        borderBottomColor: '#654597'
    },
    flexOne: {
        flex: 1,
        alignItems: 'center',
        height: 150,
        justifyContent: 'center'
    },
    flexTwo: {
        flex: 2,
        alignItems: 'center',
        height: 150,
        justifyContent: 'center'
    },
    header: {
        color: '#574ae2',
        fontSize: 18
    },
    text: {
        color: '#222a68'
    }
});

export default About;