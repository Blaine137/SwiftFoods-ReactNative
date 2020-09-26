import React, { useState } from 'react';
import { View, TextInput, StyleSheet  } from 'react-native';
import { Button } from 'react-native-elements';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const [showModal, setShowModal] = useState(false);

    return(
        <View>
            <TextInput style={styles.input} placeholder="Enter your name" onChangeText={() => setName()}/>
            <TextInput style={styles.input} placeholder="Enter your email" onChangeText={() => setEmail()}/>
            <TextInput style={styles.comments} placeholder="Enter your feedback" onChangeText={() => setComments()}/>
            <Button style={styles.submit} title="Submit" 
                    buttonStyle={{
                        backgroundColor: '#E2ADF2'
                    }} 
                    titleStyle={{
                        color: '#222A68'
                    }}
                    onPress={() => {
                        setShowModal()
                    }}/>
        </View>
    );

};

Contact['navigationOptions'] = screenProps => ({
    title: 'Contact Us'
});

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        width: 250,
        height: 50,
        color: '#654597',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12,
        marginBottom: 12
    },
    comments: {
        borderWidth: 2,
        width: 250,
        height: 150,
        color: '#654597',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12,
        marginBottom: 12
    },
    submit: {
        width: 250,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default Contact;