import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Badges from './Badges'
import Colors from '../res/Colors'
import Profile from './Profile'


const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Tabs.Navigator>
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
                    name="Badges"
                    component={Badges}
                    options={{headerShown: false}}

                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </Tabs.Navigator>
    );
}

export default StackNavigator;