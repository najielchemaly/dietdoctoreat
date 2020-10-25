import React, {useState, useEffect} from 'react'
import {View, Text, Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

export default function TabIcon(props) {
  TabIcon.update = (badge) => {
    setNotificationBadge(badge)
  }

  const {icon, tintColor, style, hasBadge} = props
  const [notificationBadge, setNotificationBadge] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('notification_badge').then((value) =>
      setNotificationBadge(value || ''),
    )
  })

  return (
    <View>
      {hasBadge && notificationBadge !== '' && (
        <View style={styles.notificationView}>
          <Text style={styles.notificationText}>{notificationBadge}</Text>
        </View>
      )}
      <Image style={[styles.defaultIcon, {tintColor}, style]} source={icon} />
    </View>
  )
}
