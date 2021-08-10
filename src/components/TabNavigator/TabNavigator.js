import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import Profile from '../Profile'
import StatusStack from './StatusStack'

const Tabs = createBottomTabNavigator();

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
                name='StatusStack'
                component={StatusStack}
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