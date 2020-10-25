import React from 'react'
import {Image, Text} from 'react-native'

import styles from './styles'
import TouchableView from '../TouchableView'

export default function ListItem(props) {
  const {icon, title, onPress} = props

  return (
    <TouchableView style={styles.container} onPress={onPress}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableView>
  )
}
