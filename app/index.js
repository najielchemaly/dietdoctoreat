import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import {setTopLevelNavigator} from './navigation'
import {AuthenticationStackScreen, ModalStackScreen} from './navigation/stacks'
import stackName from './constants/stackName'

const RootStack = createStackNavigator()

export default function App() {
  function RootStackScreen() {
    return (
      <RootStack.Navigator mode={'modal'} headerMode={'none'}>
        <RootStack.Screen
          name={stackName.mainStack}
          component={AuthenticationStackScreen}
        />
        {ModalStackScreen(RootStack)}
      </RootStack.Navigator>
    )
  }

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        setTopLevelNavigator(navigatorRef)
      }}>
      {RootStackScreen()}
    </NavigationContainer>
  )
}
