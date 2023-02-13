import React, { useState } from 'react';;
import Login from '../screens/login/index'
import Register from '../screens/register/index'
import Splash from '../screens/splash';
import Home from '../screens/home';
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
            <Stack.Navigator >
            {isloaded ?
                <Stack.Screen
                    name="Login"
                    component={Login}
                    // options={{
                    //     title: "Splash",
                    //     headerTintColor: "white",
                    //     // headerStyle:{
                    //     //     backgroundColor:"red"
                    //     // },
                    //     headerTransparent: true

                    // }}
                    options={{
                        headerShown: false 
                        
            
                    // headerStyle:{
                    //     backgroundColor:"red"
                    // },


                }}
                    />
                    :
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    
                    options={{ headerShown: false }}
                     />
            }
                <Stack.Screen
                    name="Register"
                    component={Register}
                
                        options={{
                            headerShown: false,
                            headerTransparent: true
                
                        // headerStyle:{
                        //     backgroundColor:"red"
                        // },


                    }} />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        headerTintColor: "white",
                        // headerStyle:{
                        //     backgroundColor:"red"
                        // },
                        headerTransparent: true

                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;
