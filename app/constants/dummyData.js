import {Platform} from 'react-native'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-community/async-storage'

import screenName from './screenName'
import strings from './strings'
import {getSystemLanguage, getBundleIdentifier} from './functions'

export const versionNumber = 'v2.8.0'

export const settingsItems = [
  {
    title: strings.common.termsAndConditions,
    screen: {
      name: screenName.contentWebView,
      params: {
        title: strings.common.termsAndConditions,
        url: Config.TERMS_URL,
      },
    },
  },
  {
    title: strings.common.privacyPolicy,
    screen: {
      name: screenName.contentWebView,
      params: {
        title: strings.common.privacyPolicy,
        url: Config.PRIVACY_URL,
      },
    },
  },
  {
    title: strings.settings.shareYourFeedback,
  },
  {
    title: strings.settings.rateTheApp,
    link: Platform.OS === 'ios' ? Config.APPSTORE_URL : Config.PLAYSTORE_URL,
  },
  {
    title: strings.settings.resetPassword,
    screen: {
      name: screenName.contentWebView,
      params: {
        title: strings.signin.lostPassword,
        url: Config.RESET_PASSWORD_URL,
      },
    },
  },
  {
    title: strings.settings.getSystemLanguage,
    action: getSystemLanguage,
  },
  {
    title: strings.settings.getBundleIdentifier,
    action: getBundleIdentifier,
  },
]

export const loggedInSettingsItems = [
  {
    title: strings.initial.login,
    screen: {name: screenName.initial},
    action: () => AsyncStorage.removeItem('goToDashboard'),
  },
  {
    title: strings.signup.title,
    screen: {name: screenName.signup},
  },
]
