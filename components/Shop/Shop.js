import { setLightEstimationEnabled } from 'expo/build/AR';
import React, { useState } from 'react';
import {ScrollView, Text, StyleSheet, TextInput, Modal, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

const Shop = () => {

    const [showOrderModal, toggleOrderModal] = useState(false);

    const [showThanksModal, toggleThanksModal] = useState(false);

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('')

    return(

        <ScrollView>
            <Text style={styles.pageHeader}>Free shipping on every order!</Text>
            <Card
                image={require('../images/peppizza.jpg')}>
                <Text style={styles.cardHeader}>Pizza</Text>
                <Text style={styles.cardText}>Italian pizza made with homemade tomato sauce, fresh american white cheese, and topped with pepperonis.</Text>
                <Text style={styles.cardPrice}>$6.99</Text>
                <Button title="Order Now"
                        style={styles.cardButton}
                        buttonStyle={{
                            backgroundColor: '#e2adf2'
                        }}
                        titleStyle={{
                            color:"#5637DD"
                        }}
                        onPress={() => {toggleOrderModal(!showOrderModal)}}/>    
            </Card>
            <Card
                image={require('../images/salad.jpg')}>
                <Text style={styles.cardHeader}>Salad</Text>
                <Text style={styles.cardText}>Freshly cut lettuce topped with home grown tomatos, garden fresh carrots, and our signature ranch dressing.</Text>
                <Text style={styles.cardPrice}>$4.99</Text>
                <Button title="Order Now"
                        style={styles.cardButton}
                        buttonStyle={{
                            backgroundColor: '#e2adf2'
                        }}
                        titleStyle={{
                            color:"#5637DD"
                        }}
                        onPress={() => {toggleOrderModal(!showOrderModal)}}/>    
            </Card>
            <Card
                image={require('../images/burger.jpg')}>
                <Text style={styles.cardHeader}>Burger</Text>
                <Text style={styles.cardText}>Mouth drooling angus burger on two buns topped with fresh lettuce, tomato, ketchup, and onions.</Text>
                <Text style={styles.cardPrice}>$8.99</Text>
                <Button title="Order Now"
                        style={styles.cardButton}
                        buttonStyle={{
                            backgroundColor: '#e2adf2'
                        }}
                        titleStyle={{
                            color:"#5637DD"
                        }}
                        onPress={() => {toggleOrderModal(!showOrderModal)}}/>    
            </Card>
            <Modal
                style={styles.modal} 
                visible={showOrderModal}
                animationType="slide"
                onRequestClose={() => {
                    toggleOrderModal(!showOrderModal)
                }}>
                <View style={styles.modal}>
                <Button
                    onPress={() => {
                        toggleOrderModal(!showOrderModal);
                    }}
                    color='#5637DD'
                    title='Close'
                    style={styles.modalButton}
                    buttonStyle={{
                        backgroundColor: '#574AE2'
                    }}/>
                    <ScrollView style={{flex: 1}}>
                        <Text style={styles.pageHeader}>Order!</Text>
                        <TextInput
                        style={styles.fName}
                        placeholder="Enter your first name"
                        style={styles.firstInput}
                        onChangeText={value => setFName(value)}/>
                        <TextInput
                        placeholder="Enter your last name"
                        style={styles.input}
                        onChangeText={value => setLName(value) }/>
                        <TextInput
                        placeholder="Enter your email"
                        style={styles.input}
                        onChangeText={value => setEmail(value) }/>
                        <TextInput
                        placeholder="Enter your address"
                        style={styles.input}
                        onChangeText={value => this.setState({address: value})}/>
                        <TextInput
                        placeholder="Enter your city"
                        style={styles.input}
                        onChangeText={value => this.setState({city: value})}/>
                        <TextInput
                        placeholder="Enter your state"
                        style={styles.input}
                        onChangeText={value => this.setState({state: value})}/>
                        <TextInput
                        placeholder="Enter your zipcode"
                        style={styles.input}
                        onChangeText={value => this.setState({zipcode: value})}/>
                        <TextInput
                        placeholder="Enter how many pizzas"
                        style={styles.input}
                        onChangeText={value => this.setState({months: value})}/>
                        <TextInput
                        placeholder="Enter how many salads"
                        style={styles.input}
                        onChangeText={value => this.setState({months: value})}/>
                        <TextInput
                        placeholder="Enter how many burgers"
                        style={styles.input}
                        onChangeText={value => this.setState({months: value})}/>
                        <TextInput
                        placeholder="Enter your card type"
                        style={styles.input}
                        onChangeText={value => this.setState({cardType: value})}/>
                        <TextInput
                        placeholder="Enter your card number"
                        style={styles.input}
                        onChangeText={value => this.setState({cardNum: value})}/>
                        <TextInput
                        placeholder="Enter your card's expiration date"
                        style={styles.input}
                        onChangeText={value => this.setState({cardExp: value})}/>
                        <TextInput
                        placeholder="Enter your card's security number"
                        style={styles.input}
                        onChangeText={value => this.setState({cardSec: value})}/>
                        <Button style={styles.submit} title="Submit" 
                            buttonStyle={{
                                backgroundColor: '#E2ADF2'
                            }} 
                            titleStyle={{
                                color: '#222A68'
                            }}
                            onPress={() => {
                                toggleOrderModal(!showOrderModal)
                                toggleThanksModal(!showThanksModal)
                            }}/>
                    </ScrollView>
                </View>
            </Modal>
            <Modal
                        style={styles.modal} 
                        visible={showThanksModal}
                        animationType="slide"
                        onRequestClose={() => {
                            toggleThanksModal(!showThanksModal)
                        }}>
                        <View style={styles.modal}>
                        <Button
                            onPress={() => {
                                toggleThanksModal(!showThanksModal)
                            }}
                            color='#5637DD'
                            title='Close'
                            style={styles.modalButton}
                            buttonStyle={{
                                backgroundColor: '#574AE2'
                            }}/>
                            <Text style={styles.modalText}>Hello {fName}</Text>
                        </View>
                    </Modal>
        </ScrollView>

    );

};

Shop['navigationOptions'] = screenProps => ({
    title: 'Shop'
});

const styles = StyleSheet.create({
    pageHeader: {
        fontSize: 24,
        color: '#654597',
        textAlign: 'center',
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12,
        marginBottom: 12
    },
    cardHeader: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 12,
        color: '#574ae2'
    },
    cardText: {
        color: '#222a68',
        marginBottom: 12,
        textAlign: 'left'
    },
    cardPrice: {
        color: '#222a68',
        marginBottom: 12,
        textAlign: 'center'
    },
    firstInput: {
        color: '#654597',
        height: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 12,
        marginTop: 8,
        borderWidth: 2,
        width: 250
    },
    input: {
        color: '#654597',
        height: 40,
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
        flex: 1
    },
    modalButton: {
        marginTop: 48
    },
    modalText: {
        fontSize: 24,
        marginTop: 48
    }
});

export default Shop;