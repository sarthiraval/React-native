import React, { useState } from 'react';;

import Calculator from '../screens/home';
import Splash from '../screens/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Navigation = () => {
    const [isloaded, setLoaded] = useState(false)

    setTimeout(() => {
        setLoaded(true)
    }, 2000);
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isloaded ?
                
                    <Stack.Screen
                        name="Calculator"
                        component={Calculator}

                        options={{
                            title: "Calculator",
                            headerTintColor: "red",
                            headerBackVisible: false,
                            headerTransparent: true }} />
                    :
                    <Stack.Screen
                        name="Splash"

                        component={Splash}
                        options={{
                          
                            headerShown: false
                        }} />
                }
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;
