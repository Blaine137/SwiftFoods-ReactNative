import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const SubscribeForm = props => {

    return(
        <View style={styles.container}>
            <TextInput
            placeholder="Enter your first name"
            style={styles.firstInput}/>
            <TextInput
            placeholder="Enter your last name"
            style={styles.input}/>
            <TextInput
            placeholder="Enter your address"
            style={styles.input}/>
            <TextInput
            placeholder="Enter your city"
            style={styles.input}/>
            <TextInput
            placeholder="Enter your state"
            style={styles.input}/>
        </View>
    );

};


SubscribeForm['navigationOptions'] = screenProps => ({
    title: 'Subscribe'
});

const styles = StyleSheet.create({
    container: {
        height: 100
    },
    firstInput: {
        color: '#654597',
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 12,
        marginTop: 12,
        borderWidth: 2,
        width: 250
    },
    input: {
        color: '#654597',
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 12,
        borderWidth: 2,
        width: 250
    }
});

export default SubscribeForm;