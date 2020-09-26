import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Modal  } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const [showModal, setShowModal] = useState(false);

    return(
        <Animatable.View animation="fadeIn" duration={2000} delay={1000}>
            <TextInput style={styles.input} placeholder="Enter your name" onChangeText={value => setName(value)}/>
            <TextInput style={styles.input} placeholder="Enter your email" onChangeText={value => setEmail(value)}/>
            <TextInput style={styles.comments} placeholder="Enter your feedback" onChangeText={value => setComments(value)}/>
            <Button style={styles.submit} title="Submit" 
                    buttonStyle={{
                        backgroundColor: '#E2ADF2'
                    }} 
                    titleStyle={{
                        color: '#222A68'
                    }}
                    onPress={() => {
                        setShowModal(!showModal)
                    }}/>
            <Modal
                style={styles.modal} 
                visible={showModal}
                animationType="slide"
                onRequestClose={() => {
                    setShowModal(!showModal)
                }}>
                <View style={styles.modal}>
                <Button
                    onPress={() => {
                        setShowModal(!showModal)
                    }}
                    color='#5637DD'
                    title='Close'
                    style={styles.modalButton}
                    buttonStyle={{
                        backgroundColor: '#574AE2'
                    }}/>
                    <Text style={styles.modalText}>Hello {name}, Thank you for contacting us. your feedback will be reviewed shortly, and you will recieve an response at {email} within the next 24 hours.</Text>
                </View>
            </Modal>
        </Animatable.View>
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
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalButton: {
        marginTop: 48
    },
    modalText: {
        fontSize: 24,
        marginTop: 48
    }
});

export default Contact;