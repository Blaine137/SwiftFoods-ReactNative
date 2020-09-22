import React from 'react';
import {ScrollView, Text, StyleSheet, TextInput, Modal, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

const Shop = () => {

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
                        color="#5637DD"
                        buttonStyle={{
                            backgroundColor: '#e2adf2',
                        }}/>    
            </Card>
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

export default Shop;