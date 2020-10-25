import React from 'react'
import {SectionList} from 'react-native'

export default function ContentSectionList(props) {
  return (
    <SectionList
      {...props}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
    />
  )
}
