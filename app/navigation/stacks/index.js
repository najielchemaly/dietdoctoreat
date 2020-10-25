import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import screenName from '../../constants/screenName'
import stackName from '../../constants/stackName'
import colors from '../../constants/colors'
import Initial from '../../screens/Authentication/Initial'
import Signin from '../../screens/Authentication/Signin'
import Subscribe from '../../screens/Authentication/Subscribe'
import ContentWebView from '../../screens/Common/ContentWebView'
import Tabbar from '../../screens/Authenticated/Tabbar'
import Signup from '../../screens/Authentication/Signup'
import AlertModal from '../../components/AlertModal'

const AuthenticationStack = createStackNavigator()
const AuthenticatedStack = createStackNavigator()

function AuthenticatedStackScreen() {
  return (
    <AuthenticatedStack.Navigator headerMode={'none'}>
      <AuthenticatedStack.Screen
        name={screenName.tabbar}
        component={Tabbar}
        options={{
          gestureEnabled: false,
        }}
      />
    </AuthenticatedStack.Navigator>
  )
}

function AuthenticationStackScreen() {
  return (
    <AuthenticationStack.Navigator
      headerMode={'none'}
      initialRouteName={stackName.authenticationStack}>
      <AuthenticationStack.Screen
        name={screenName.initial}
        component={Initial}
        options={{gestureEnabled: false}}
      />
      <AuthenticationStack.Screen name={screenName.signin} component={Signin} />
      <AuthenticationStack.Screen
        name={screenName.subscribe}
        component={Subscribe}
      />
      <AuthenticatedStack.Screen
        name={stackName.authenticatedStack}
        component={AuthenticatedStackScreen}
      />
    </AuthenticationStack.Navigator>
  )
}

function ModalStackScreen(RootStack = createStackNavigator()) {
  return (
    <>
      <RootStack.Screen name={screenName.signup} component={Signup} />
      <RootStack.Screen
        name={screenName.contentWebView}
        component={ContentWebView}
      />
      <RootStack.Screen
        name={screenName.alertModal}
        component={AlertModal}
        options={{
          cardStyle: {backgroundColor: colors.transparent},
        }}
      />
    </>
  )
}

export {AuthenticationStackScreen, ModalStackScreen}
