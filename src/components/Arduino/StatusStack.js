import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Status from './Status'
import Colors from '../../res/Colors'
import StatusDetail from './StatusDetail'


const Stack = createStackNavigator();

const StatusStack = () => {
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
                    name="Status"
                    component={Status}
                    options={{headerShown: false}}

                />
                <Stack.Screen
                    name="StatusDetail"
                    component={StatusDetail}
                    options={{headerShown: false}}
                />
             
            </Stack.Navigator>
    );
}

export default StatusStack;