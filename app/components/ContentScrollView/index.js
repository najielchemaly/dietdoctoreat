import React from 'react'
import {ScrollView} from 'react-native'

import styles from './styles'

export default function ContentScrollView(props) {
  const {children, createRef} = props
  return (
    <ScrollView style={styles.container} ref={createRef} {...props}>
      {children}
    </ScrollView>
  )
}

ContentScrollView.defaultProps = {
  keyboardDismissMode: 'interactive',
  keyboardShouldPersistTaps: 'handled',
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  scrollEnabled: false,
}
