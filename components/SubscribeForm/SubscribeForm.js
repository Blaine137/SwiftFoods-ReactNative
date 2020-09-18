import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, TextInput, Modal, View} from 'react-native';
import {Button} from 'react-native-elements'


class SubscribeForm extends Component{

    state = {
        showModal: false,
        fName: null,
        lName: null,
        email: null,
        address: null,
        city: null,
        state: null,
        zipcode: null,
        months: null,
        cardType: null,
        cardNum: null,
        cardExp: null,
        cardSec: null

    };

    static navigationOptions = {
        title: 'Subscribe'
    };

    toggleModal = () => {
        this.setState( { showModal: !this.state.showModal } );
    }

    render(){

        return(
            <ScrollView style={styles.container}>
                <Text style={styles.pageHeader}>Subscribe today to get meals sent weekly!</Text>
                <TextInput
                style={styles.fName}
                placeholder="Enter your first name"
                style={styles.firstInput}/>
                <TextInput
                placeholder="Enter your last name"
                style={styles.input}/>
                <TextInput
                placeholder="Enter your email"
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
                <TextInput
                placeholder="Enter your zipcode"
                style={styles.input}/>
                <TextInput
                placeholder="Enter how many months"
                style={styles.input}/>
                <TextInput
                placeholder="Enter your card type"
                style={styles.input}/>
                <TextInput
                placeholder="Enter your card number"
                style={styles.input}/>
                <TextInput
                placeholder="Enter your card's expiration date"
                style={styles.input}/>
                <TextInput
                placeholder="Enter your card's security number"
                style={styles.input}/>
                <Button style={styles.submit} title="Submit" 
                    buttonStyle={{
                        backgroundColor: '#E2ADF2'
                    }} 
                    titleStyle={{
                        color: '#222A68'
                    }}
                    onPress={() => {
                        this.toggleModal()
                    }}/>
                    <Modal
                        style={styles.modal} 
                        visible={this.state.showModal}
                        animationType="slide"
                        onRequestClose={() => {
                            this.toggleModal()
                        }}>
                        <View style={{height: 250}}>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                            }}
                            color='#5637DD'
                            title='Close'
                            style={styles.modalButton}/>
                            <Text>Testing modal</Text>
                        </View>
                    </Modal>
            </ScrollView>
        );

    }

};




const styles = StyleSheet.create({
    container: {
        height: 100
    },
    pageHeader: {
        fontSize: 24,
        color: '#654597',
        textAlign: 'center',
        width: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12,
        marginBottom: 12
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
    },
    submit: {
        width: 200,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    modal: { 
        justifyContent: 'center',
        margin: 20,
        backgroundColor: 'red'
    },
    modalButton: {
        marginTop: 48
    }
});

export default SubscribeForm;