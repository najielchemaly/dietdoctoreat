import React, {createRef} from 'react'
import {Alert, ImageBackground, View} from 'react-native'
import Config from 'react-native-config'

import styles from './styles'
import SafeArea from '../../../components/SafeArea'
import background from '../../../assets/images/background.png'
import DDButton from '../../../components/DDButton'
import DDTextButton from '../../../components/DDTextButton'
import DDTextInput from '../../../components/DDTextInput'
import HeaderView from '../../../components/HeaderView'
import KeyboardView from '../../../components/KeyboardView'
import strings from '../../../constants/strings'
import {goBack, navigateToStack, resetToStack} from '../../../navigation'
import SigninState from '../../../hooks/SigninState'
import {regexType} from '../../../constants/variables'
import screenName from '../../../constants/screenName'
import APISignin from '../../../services/User/APISignin'
import LoaderView from '../../../components/LoaderView'
import stackName from '../../../constants/stackName'
import DDSwitch from '../../../components/DDSwitch'

export default function Signin() {
  const state = SigninState()
  const usernameRef = createRef()
  const passwordRef = createRef()

  function handleOnLogin() {
    if (state.validate()) {
      LoaderView.show()
      APISignin(state.username.value, state.password.value)
        .then(() => resetToStack(stackName.authenticatedStack))
        .catch((error) => {
          state.setPassword({...state.password, value: ''})

          const errorMessage =
            error.status === 401
              ? strings.signin.invalidCredentials
              : strings.common.errorOccurred

          Alert.alert(null, errorMessage)
        })
    }
  }

  function handleOnForgotPassword() {
    const params = {
      title: strings.signin.lostPassword,
      url: Config.RESET_PASSWORD_URL,
      onDismiss: () => {
        if (usernameRef.current) {
          usernameRef.current.focus()
        }
      },
    }
    navigateToStack(screenName.contentWebView, params)
  }

  function handleOnUseDefaultCredentials(value) {
    if (value) {
      state.setUsername({...state.username, value: Config.DEFAULT_USERNAME})
      state.setPassword({...state.password, value: Config.DEFAULT_PASSWORD})
    } else {
      state.clear()
    }
  }

  return (
    <ImageBackground style={styles.imageBackground} source={background}>
      <View style={styles.overlay} />
      <HeaderView
        style={styles.headerView}
        title={strings.initial.login}
        onBack={() => goBack()}
        hasBack
      />
      <SafeArea style={styles.safeArea}>
        <KeyboardView style={styles.keyboardView}>
          <View style={styles.contentView}>
            <DDTextInput
              autoFocus
              createRef={usernameRef}
              placeholder={strings.signin.emailOrPhone}
              valid={state.username.valid}
              value={state.username.value}
              regex={regexType.empty}
              blurOnSubmit={false}
              onChangeText={(value, valid) => state.setUsername({value, valid})}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <DDTextInput
              createRef={passwordRef}
              style={styles.buttonMargin}
              placeholder={strings.signin.password}
              valid={state.password.valid}
              value={state.password.value}
              onChangeText={(value, valid) => state.setPassword({value, valid})}
              regex={regexType.empty}
              returnKeyType={'go'}
              blurOnSubmit={false}
              onSubmitEditing={handleOnLogin}
              secureTextEntry
            />
            <DDButton title={strings.initial.login} onPress={handleOnLogin} />
            <DDSwitch
              title={strings.signin.useDefaultCredentials}
              containerStyle={styles.switchContainer}
              onValueChange={handleOnUseDefaultCredentials}
            />
            <DDTextButton
              style={styles.forgotPassword}
              title={strings.signin.forgottenPassword}
              onPress={handleOnForgotPassword}
            />
          </View>
        </KeyboardView>
      </SafeArea>
      <LoaderView light />
    </ImageBackground>
  )
}
