import React, { Component } from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            title: 'Subscribe',
            headerStyle: {
                backgroundColor: '#222A68'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#222A68'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const SubscribeNavigator = createStackNavigator(
    {
        Subscribe: { screen: SubscribeForm }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#222A68'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('../images/swiftfoodslogodcolor.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Swift Foods</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);


const MainNavigator = createDrawerNavigator(
    {
        Home: {
          screen: HomeNavigator
        },
        Subscribe: {
            screen: SubscribeNavigator
        },
        About: {
           screen: AboutNavigator
        }
    },
    {
        contentComponent: CustomDrawerContentComponent,
        drawerBackgroundColor: '#574AE2',
        contentOptions: {
            activeTintColor: '#fff',

        }
    }
);


class Layout extends Component{

    render(){

        return(
            <View style={{flex: 1}}>
                <MainNavigator/>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#574AE2',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Layout;