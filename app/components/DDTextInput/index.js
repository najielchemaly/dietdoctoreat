import React from 'react'
import {View, Text, TextInput} from 'react-native'

import styles from './styles'
import strings from '../../constants/strings'
import {validateText} from '../../constants/functions'

export default function DDTextInput(props) {
  const {
    title,
    titleStyle,
    containerStyle,
    style,
    onChangeText,
    regex,
    disabled,
    optional,
    valid,
    createRef,
    multiline,
    editable,
  } = props

  function handleOnChangeText(text) {
    const isValid = validateText(text, regex)
    onChangeText && onChangeText(text, isValid)
  }

  return (
    <View
      style={[styles.container, containerStyle, disabled && styles.disabled]}
      pointerEvents={disabled && 'none'}>
      {title && (
        <Text style={[styles.title, titleStyle]}>
          {title} {!optional && '*'} {optional && strings.common.optional}
        </Text>
      )}
      <View
        style={[styles.textInputContainer, !valid && styles.inputError, style]}>
        <TextInput
          {...props}
          ref={createRef}
          style={[styles.textInput, titleStyle, multiline && styles.multiline]}
          onChangeText={handleOnChangeText}
          scrollEnabled={false}
          editable={editable}
        />
      </View>
    </View>
  )
}

DDTextInput.defaultProps = {
  returnKeyType: 'next',
  autoCapitalize: 'none',
  autoCorrect: false,
  editable: true,
}
