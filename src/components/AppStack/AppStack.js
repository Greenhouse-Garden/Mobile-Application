import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from '../TabNavigator/TabNavigator'
import Status from '../Arduino/Status'
import StatusDetail from '../Arduino/StatusDetail'
import Profile from '../User/Profile'
import Landing from '../Landing'
import Login from '../User/Login'
import Colors from '../../res/Colors'

const Stack = createStackNavigator();


const AppStack = () => {
    
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.charade,
                    shadowColor: Colors.charade,
                },
                headerTintColor: Colors.white
            }}>
            
            <Stack.Screen 
                name = 'Landing' 
                component = {Landing} 
                option = {{headerShown: false} }/>

            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown: false}}/>

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

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}} 
            />
                
        </Stack.Navigator>
    )
};

export default AppStack;