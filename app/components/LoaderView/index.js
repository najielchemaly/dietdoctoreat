import React, {useState} from 'react'
import {ActivityIndicator, View} from 'react-native'

import colors from '../../constants/colors'
import styles from './styles'

export default function LoaderView(props) {
  const {visible, light, style} = props
  const [animating, setAnimating] = useState(visible || false)

  LoaderView.show = () => {
    setAnimating(true)
  }

  LoaderView.hide = () => {
    setAnimating(false)
  }

  return (
    animating && (
      <View style={[styles.container, style]}>
        <ActivityIndicator
          color={light ? colors.white : colors.darkGrey}
          size={'large'}
          animating
        />
      </View>
    )
  )
}
