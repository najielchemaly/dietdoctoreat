import React from 'react'
import {Text} from 'react-native'

import TouchableView from '../TouchableView'
import styles from './styles'

export default function DDTextButton(props) {
  const {title, titleStyle, style, onPress} = props

  return (
    <TouchableView style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableView>
  )
}
