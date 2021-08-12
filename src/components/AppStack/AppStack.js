import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from '../TabNavigator/TabNavigator'
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
                name = 'TabNavigator' 
                component = {TabNavigator} />

            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown: false}}/>
                
        </Stack.Navigator>
    )
};

export default AppStack;