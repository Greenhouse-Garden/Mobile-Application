import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/Colors'
import Profile from './Profile'
import Status from '../Arduino/Status'

import AddArduino from '../Arduino/AddArduino'
const Stack = createStackNavigator();

const UserStack = () => {
    return(
            <Stack.Navigator
                screenOption={{
                    headerShown: false,
                    headerStyle:{
                        backgroundColor: Colors.green,
                        shadowColor: Colors.green,
                },
                headerTintColor: Colors.blue,
            }}
            >
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{headerShown: false}}

                />
                <Stack.Screen
                    name="AddArduino"
                    component={AddArduino}
                    options={{headerShown: false}}
                />
                

            </Stack.Navigator>
    );
}

export default UserStack;