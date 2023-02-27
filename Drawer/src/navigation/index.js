import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import First from '../Screen/firstDrawer';
import Second from '../Screen/SecondDrawer';

const Drawer = createDrawerNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
                <Drawer.Navigator initialRouteName='First'>
                    <Drawer.Screen name='First' component={First} />
                    <Drawer.Screen name='Second' component={Second} />
                </Drawer.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;
