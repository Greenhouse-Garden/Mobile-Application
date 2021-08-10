import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import Badges from '../Badges'
import Profile from '../Profile'

const Tabs = createBottomTabNavigator();
//here are the badges screens
const TabNavigator = () =>{
    return(
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: true,
                tintColor: Colors.black,
                activeTintColor: '#E3198F',
                style:{
                    backgroundColor: Colors.zircon,
                    paddingTop:30,
                },
            }}>
            <Tabs.Screen 
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size}}
                            source={require('../../assets/profile.png')}/>
                    )}}/>
            <Tabs.Screen 
            name='Badges'
            component={Badges}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Image style={{tintColor: color, width:size, height: size}}
                    source={require('../../assets/home.png')} />
                )
            }}
            />
        </Tabs.Navigator>
    );
};

export default TabNavigator;