import React, {useEffect, useState} from 'react'
import {Image, ImageBackground, Text, View} from 'react-native'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import ContentScrollView from '../../../components/ContentScrollView'
import SafeArea from '../../../components/SafeArea'
import background from '../../../assets/images/background.png'
import logo from '../../../assets/images/logo.png'
import DDButton from '../../../components/DDButton'
import DDTextButton from '../../../components/DDTextButton'
import strings from '../../../constants/strings'
import screenName from '../../../constants/screenName'
import {navigateToStack, resetToStack} from '../../../navigation'
import stackName from '../../../constants/stackName'

export default function Initial() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('goToDashboard').then((value) => {
      if (value) {
        resetToStack(stackName.authenticatedStack)
      }
      setVisible(true)
    })
  }, [])

  function handleOnPrivacyPolicy() {
    const params = {
      title: strings.common.privacyPolicy,
      url: Config.PRIVACY_URL,
    }
    navigateToStack(screenName.contentWebView, params)
  }

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={visible ? background : null}>
      {visible && (
        <SafeArea style={styles.safeArea} hideStatus>
          <ContentScrollView contentContainerStyle={styles.container}>
            <View style={styles.contentView}>
              <Image style={styles.logo} source={logo} />
              <Text style={styles.logoHint}>{strings.initial.logoHint}</Text>
            </View>
            <View style={styles.contentView}>
              <DDButton
                title={strings.initial.login}
                onPress={() => navigateToStack(screenName.signin)}
              />
              <DDButton
                dark
                style={styles.buttonMargin}
                title={strings.initial.skip}
                onPress={() => navigateToStack(screenName.subscribe)}
              />
              <DDTextButton
                style={styles.buttonMargin}
                title={strings.common.privacy}
                onPress={handleOnPrivacyPolicy}
              />
            </View>
          </ContentScrollView>
        </SafeArea>
      )}
    </ImageBackground>
  )
}
