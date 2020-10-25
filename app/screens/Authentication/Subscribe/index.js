import React, {createRef} from 'react'
import {ImageBackground, Keyboard, Text, View} from 'react-native'
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
import SubscribeState from '../../../hooks/SubscribeState'
import {regexType} from '../../../constants/variables'
import screenName from '../../../constants/screenName'
import stackName from '../../../constants/stackName'

export default function Subscribe() {
  const state = SubscribeState()
  const emailRef = createRef()

  function handleOnSubscribe() {
    if (state.validate()) {
      const params = {
        title: strings.subscribe.title,
        url: Config.SUBSCRIBE_URL,
        email: state.email.value,
      }
      navigateToStack(screenName.contentWebView, params)
    }
  }

  function handleOnPrimaryPress() {
    resetToStack(stackName.authenticatedStack)
  }

  function handleOnSecondaryPress() {
    const params = {
      title: strings.common.termsAndConditions,
      url: Config.TERMS_URL,
    }
    navigateToStack(screenName.contentWebView, params)
  }

  function handleOnNoThanks() {
    Keyboard.dismiss()

    const params = {
      title: strings.common.byChoosingAccept,
      primaryTitle: strings.common.accept,
      onPrimaryPress: handleOnPrimaryPress,
      secondaryTitle: strings.common.view,
      onSecondaryPress: handleOnSecondaryPress,
      onCancel: () => emailRef.current.focus(),
    }
    navigateToStack(screenName.alertModal, params)
  }

  return (
    <ImageBackground style={styles.imageBackground} source={background}>
      <View style={styles.overlay} />
      <HeaderView
        style={styles.headerView}
        title={strings.subscribe.dontMissOut}
        onBack={() => goBack()}
        hasBack
      />
      <SafeArea style={styles.safeArea} hideStatus>
        <KeyboardView style={styles.keyboardView}>
          <View style={styles.contentView}>
            <Text style={styles.subscribeInfo}>
              {strings.subscribe.stayInTheLoop}
            </Text>
            <DDTextInput
              autoFocus
              createRef={emailRef}
              style={styles.buttonMargin}
              placeholder={strings.signin.email}
              valid={state.email.valid}
              value={state.email.value}
              regex={regexType.email}
              returnKeyType={'go'}
              keyboardType={'email-address'}
              blurOnSubmit={false}
              onChangeText={(value, valid) => state.setEmail({value, valid})}
              onSubmitEditing={handleOnSubscribe}
            />
            <DDButton
              title={strings.subscribe.title}
              onPress={handleOnSubscribe}
            />
            <DDTextButton
              style={styles.noThanks}
              title={strings.subscribe.noThanks}
              onPress={handleOnNoThanks}
            />
          </View>
        </KeyboardView>
      </SafeArea>
    </ImageBackground>
  )
}
