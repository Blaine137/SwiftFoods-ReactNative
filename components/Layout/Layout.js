import React, { Component } from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import {View, Text, Stylesheet, Platform} from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
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
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
          screen: HomeNavigator
        },
        About: {
           screen: AboutNavigator
        }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);


class Layout extends Component{

    render(){

        return(
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator/>
            </View>
        );

    }

}

export default Layout;