import React from 'react'
import {View, Text, Image} from 'react-native'

import styles from './styles'
import backArrow from '../../assets/icons/backArrow/backArrow.png'
import closeIcon from '../../assets/icons/closeIcon/closeIcon.png'
import TouchableView from '../TouchableView'

export default function HeaderView(props) {
  const {title, hasBack, onBack, hasClose, onClose, style} = props

  return (
    <View style={[styles.container, style]}>
      <View style={styles.itemContainer}>
        {hasBack && (
          <TouchableView style={styles.itemContainer} onPress={onBack}>
            <Image style={styles.icon} source={backArrow} />
          </TouchableView>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemContainer}>
        {hasClose && (
          <TouchableView style={styles.itemContainer} onPress={onClose}>
            <Image style={styles.icon} source={closeIcon} />
          </TouchableView>
        )}
      </View>
    </View>
  )
}

HeaderView.defaultProps = {
  hasClose: false,
  hasBack: false,
}
