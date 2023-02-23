import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CarAdd from '../screens/caradd'
import CarLoading from '../screens/carloading'
import Onboarding from '../screens/Onboarding';
import CarList from '../screens/CarList';
import ThankYou from '../screens/ThankYou';
import CarSelection from '../screens/carselection'
const  Navigator =() =>{
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding} options={{ title: "Onboarding",  headerShown:false}} />  
        <Stack.Screen name="CarSelection" component={CarSelection} options={{headerShown : false}}/>
        <Stack.Screen name='CarList' component={CarList} options={{ title: "CarList",  headerShown:false}} />  
        <Stack.Screen name="CarLoading" component={CarLoading}  options={{headerShown : false}}/>
        <Stack.Screen name="CarAdd" component={CarAdd} options={{headerShown : false}}/>
        <Stack.Screen name='ThankYou' component={ThankYou} options={{ title: "ThankYou",  headerShown:false}} />  

        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigator