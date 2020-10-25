import React, {useState} from 'react'
import {View, Switch, Text} from 'react-native'

import colors from '../../constants/colors'
import styles from './styles'

export default function DDSwitch(props) {
  const {title, titleStyle, containerStyle, onValueChange} = props
  const [value, setValue] = useState(false)

  function handleOnValueChange() {
    setValue(!value)
    onValueChange && onValueChange(!value)
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Switch
        {...props}
        style={styles.switch}
        ios_backgroundColor={colors.white}
        onValueChange={handleOnValueChange}
        value={value}
      />
    </View>
  )
}
