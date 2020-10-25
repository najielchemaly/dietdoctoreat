import {Linking, Alert, Platform, NativeModules} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import screenName from './screenName'
import strings from './strings'
import {regexType} from './variables'
import {resetToStack} from '../navigation'

const {DDSystemInfo} = NativeModules

export function validateText(text, regex) {
  if (text === '') {
    return false
  }

  if (regex === null) {
    return true
  }

  if (regex === regexType.empty) {
    return text !== ''
  }

  try {
    return new RegExp(regex).test(text)
  } catch {
    return false
  }
}

export function openStore(link) {
  try {
    if (Linking.canOpenURL(link)) {
      Linking.openURL(link)
    }
  } catch (e) {}
}

export function logout() {
  Alert.alert(
    null,
    strings.common.areYouSureToLogout,
    [
      {
        text: strings.common.logout,
        onPress: () => navigateToInitial(),
      },
      {
        text: strings.common.cancel,
        style: 'cancel',
      },
    ],
    {cancelable: false},
  )
}

export function sessionTimeout() {
  Alert.alert(
    strings.common.sessionExpired,
    strings.common.sessionExpiredDesc,
    [
      {
        text: strings.signin.title,
        onPress: () => navigateToInitial(),
      },
    ],
    {cancelable: false},
  )
}

export function getSystemLanguage() {
  if (Platform.OS === 'ios') {
    return DDSystemInfo.getLanguage((language) => {
      Alert.alert(null, `System Language: ${language}`)
    })
  }

  Alert.alert(`This feature is Not supported on ${Platform.OS.toUpperCase()}`)
}

export function getBundleIdentifier() {
  if (Platform.OS === 'ios') {
    return DDSystemInfo.getBundleIdentifier((identifier) => {
      Alert.alert(null, `Bundle Identifier: ${identifier}`)
    })
  }

  Alert.alert(`This feature is Not supported on ${Platform.OS.toUpperCase()}`)
}

function navigateToInitial() {
  const keysToRemove = ['token', 'fcm_token', 'goToDashboard']
  AsyncStorage.multiRemove(keysToRemove)

  resetToStack(screenName.initial)
}
