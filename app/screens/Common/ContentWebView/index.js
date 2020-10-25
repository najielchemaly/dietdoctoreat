import React, {useEffect, useState} from 'react'
import {Keyboard, View} from 'react-native'
import {WebView} from 'react-native-webview'

import styles from './styles'
import LoaderView from '../../../components/LoaderView'
import HeaderView from '../../../components/HeaderView'
import SafeArea from '../../../components/SafeArea'
import {goBack} from '../../../navigation'

export default function ContentWebView(props) {
  const {route} = props
  const params = route.params || {}
  const {title, url, onDismiss} = params
  const email = params.email || undefined
  const [isLoading, setIsLoading] = useState(true)

  const jsCode = `document.getElementById("MERGE0").value="${email}"`

  useEffect(() => {
    Keyboard.dismiss()
  }, [])

  function handleOnClose() {
    goBack()
    onDismiss && onDismiss()
  }

  return (
    <View style={styles.flexOne}>
      <HeaderView hasClose title={title} onClose={handleOnClose} />
      <SafeArea>
        <WebView
          style={styles.flexOne}
          source={{uri: url}}
          pullToRefreshEnabled
          onLoad={() => setIsLoading(false)}
          injectedJavaScript={jsCode}
          javaScriptEnabled={true}
          onMessage={() => {}}
        />
        {isLoading && <LoaderView visible />}
      </SafeArea>
    </View>
  )
}
