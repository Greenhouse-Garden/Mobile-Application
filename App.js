import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import GreenHouseStack from './src/components/Stack.js';


const App = () => {
    return(
        <NavigationContainer>
            <GreenHouseStack />
        </NavigationContainer>
    );
};

export default App;
