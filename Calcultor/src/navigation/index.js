import React from 'react';;

import Calculator from '../screens/home';
import Splash from '../screens/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Navigation = () => {

    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    // options={{
                    //     title: "Splash",
                    //     headerTintColor: "white",
                    //     // headerStyle:{
                    //     //     backgroundColor:"red"
                    //     // },
                    //     headerTransparent: true

                    // }}
                    options={{ headerShown: false }} />
             
                <Stack.Screen
                    name="Calculator"
                    component={Calculator}
                    options={{
                        title: "Calculator",
                        headerTintColor: "white",
                       
                        headerTransparent: true

                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;
