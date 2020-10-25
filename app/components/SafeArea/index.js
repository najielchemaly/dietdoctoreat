import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'

import styles from './styles'

export default function SafeArea(props) {
  const {children, hideStatus, lightStatus, style} = props
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <StatusBar
        barStyle={lightStatus && 'light-content'}
        hidden={hideStatus}
      />
      {children}
    </SafeAreaView>
  )
}
