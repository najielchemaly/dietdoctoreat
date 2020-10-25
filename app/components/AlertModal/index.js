import React, {useEffect, useState} from 'react'
import {Animated, Image, Text, View} from 'react-native'

import styles from './styles'
import DDButton from '../DDButton'
import DDTextButton from '../DDTextButton'
import checkIcon from '../../assets/icons/checkIcon/checkIcon.png'
import {goBack} from '../../navigation'
import strings from '../../constants/strings'

export default function AlertModal(props) {
  const {route} = props
  const params = route.params || {}
  const {
    title,
    primaryTitle,
    onPrimaryPress,
    secondaryTitle,
    onSecondaryPress,
    onCancel,
  } = params
  const [fadeAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0.5,
      duration: 300,
      delay: 300,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  function dismiss() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      delay: 0,
      useNativeDriver: true,
    }).start(() => goBack())
  }

  function handleOnPrimaryPress() {
    onPrimaryPress()
    dismiss()
  }

  return (
    <>
      <Animated.View style={[styles.overlay, {opacity: fadeAnim}]} />
      <View style={styles.container}>
        <View>
          <View style={styles.contentView}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={checkIcon} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.viewContainer}>
            <DDButton
              style={styles.primaryButton}
              title={primaryTitle}
              onPress={handleOnPrimaryPress}
            />
            <DDTextButton
              style={styles.secondaryButton}
              title={secondaryTitle}
              titleStyle={styles.secondaryTitle}
              onPress={onSecondaryPress}
            />
          </View>
        </View>
        <DDTextButton
          style={styles.cancel}
          title={strings.common.cancel}
          onPress={() => {
            dismiss()
            onCancel()
          }}
        />
      </View>
    </>
  )
}
