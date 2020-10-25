import React from 'react'
import {FlatList} from 'react-native'

export default function ContentFlatList(props) {
  return (
    <FlatList
      {...props}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
    />
  )
}
