import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from './Landing'
import LogIn from './LogIn'
import Badges from './Badges'
import Colors from '../res/Colors'
import BadgeDetail from './BadgeDetail'
import TroubleShooting from './TroubleShooting'
import Profile from './Profile'
import TabNavigator from './TabNavigator/TabNavigator'
import AddArduino from './AddArduino'


const Stack = createStackNavigator();

const GreenHouseStack = () => {
    return(
        <Stack.Navigator
            screenOption={{
                headerStyle:{
                    backgroundColor: Colors.green,
                    shadowColor: Colors.green,
            },
            headerTintColor: Colors.white,
        }}
        >
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{headerShown: false}}
            /> 
            <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{headerShown: false}}

            />

            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Badges"
                component={Badges}
                options={{headerShown: false}}

            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="BadgeDetail"
                component={BadgeDetail}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="AddArduino"
                component={AddArduino}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="TroubleShooting"
                component={TroubleShooting}
                options={{headerShown: false}}
            />
            </Stack.Navigator>
    );
}

export default GreenHouseStack;