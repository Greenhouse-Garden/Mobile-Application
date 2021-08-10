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
            screenOptions={{
                headerShown: false,
                showLabel: false,
                tintColor: Colors.white,
                activeTintColor: Colors.black,
                style:{
                    backgroundColor: Colors.zircon,
                    paddingTop:30,
                },
            }}>
            <Tabs.Screen 
                name=' '
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size, marginTop:15}}
                            source={require('../../assets/profile.png')}/>
                    )}}/>
            <Tabs.Screen 
                name='  '
                component={StatusStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image style={{tintColor: color, width: size, height: size, marginTop:15}}
                        source={require('../../assets/home.png')} />
                    )
                }}
            />
        </Tabs.Navigator>
    );
};

export default TabNavigator;