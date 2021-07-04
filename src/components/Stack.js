import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from './Landing'
import LogIn from './LogIn'
import Colors from '../res/Colors'

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
            /> 
        </Stack.Navigator>
    );
}

export default GreenHouseStack;