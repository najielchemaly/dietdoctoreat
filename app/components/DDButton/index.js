import React from 'react'
import {Text} from 'react-native'

import TouchabelView from '../TouchableView'
import styles from './styles'

export default function DDButton(props) {
  const {title, style, dark, onPress} = props

  return (
    <TouchabelView
      style={[styles.container, dark && styles.darkContainer, style]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchabelView>
  )
}
