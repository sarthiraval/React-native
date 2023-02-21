import { View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Filter from '../screens/filter'
// import Main from './main.js'
// import Calculator from '../screens/home/index'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <View>
      <Drawer.Navigator>
        <Drawer.Screen name="Filter"
          component={Filter}
          options={{
            headerShown: true,

          }} />
      </Drawer.Navigator>
    </View>
  )
}

export default DrawerNavigation