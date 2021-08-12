/*import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import UserStack from '../User/UserStack'
import StatusStack from '../Arduino/StatusStack'

const Tabs = createBottomTabNavigator();

const TabNavigator = () =>{


    return(
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                showLabel: false,
                color: Colors.green,
                tintColor: Colors.white,
                activeTintColor: Colors.black,
                style:{
                    backgroundColor: Colors.zircon,
                    paddingTop:30,
                },
            }}>
                

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
            <Tabs.Screen 
                name=' '
                component={UserStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size, marginTop:15}}
                            source={require('../../assets/profile.png')}/>
                    )}}/>

        </Tabs.Navigator>
    );
};

export default TabNavigator;*/