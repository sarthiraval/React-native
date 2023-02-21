import React, { useState } from 'react';;

import Filter from '../screens/filter';
import Splash from '../screens/splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Calculator from '../screens/home';



const Navigation = () => {
    // const [isloaded, setLoaded] = useState(false)

    // setTimeout(() => {
    //     setLoaded(true)
    // }, 5000);
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {isloaded ? */}

                    
                    {/* : */}
                    <Stack.Screen
                        name="Splash"

                    component={Splash}
                        
                        options={{
                            headerShown: false,
                            // headerLeft: () => <></>,

                        }} />
                        <Stack.Screen
                        name="Filter"
                        component={Filter}
                        options={{
                            headerShown: true,
                            // headerLeft: () => <></>,

                        }}
                       />
               <Stack.Screen
                        name="Calculator"
                        component={Calculator}
                        options={{
                            headerTitle: "",
                            headerShown: false,
                            // headerLeft: () =><Image source={cross} />,
                            // headerRight : ()=> <></>
                        }} />
                {/* } */}
                
            </Stack.Navigator>

        </NavigationContainer>
    );
}


export default Navigation;
