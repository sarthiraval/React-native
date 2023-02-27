import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TodoList from '../screen/todolist'

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
             <Stack.Screen
                name="TodoList"
                component={TodoList}
                screenOptions={{
                    headerShown: false,
                }}
                options={{
                    headerShown: false,
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation