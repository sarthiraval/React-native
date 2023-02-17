import React, { useState } from 'react';;

import Filter from '../screens/filter';
import Splash from '../screens/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Navigation = () => {
    const [isloaded, setLoaded] = useState(false)

    setTimeout(() => {
        setLoaded(true)
    }, 5000);
    const Stack = createNativeStackNavigator()
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isloaded ?
                
                    <Stack.Screen
                        name="Filter"
                        component={Filter}
                        options={{ 
                            headerTitle:"",
                            headerShown: false,
                            // headerLeft: () =><Image source={cross} />,
                            // headerRight : ()=> <></>
                           }} />
                    :
                    <Stack.Screen
                        name="Splash"

                        component={Splash}
                        options={{
                            headerShown: false,
                            // headerLeft: () => <></>,

                        }} />
                }
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;
