import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home'
import Sobre from './pages/sobre/sobre'

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
    );
}

export default Routes;