import React from 'react'
import {TouchableOpacity} from 'react-native'

export default function TouchableView(props) {
  const {children} = props
  return (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {children}
    </TouchableOpacity>
  )
}
