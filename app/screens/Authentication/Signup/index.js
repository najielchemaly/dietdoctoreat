import React from 'react'

import HeaderView from '../../../components/HeaderView'
import SafeArea from '../../../components/SafeArea'
import strings from '../../../constants/strings'
import {goBack} from '../../../navigation'
import styles from './styles'

export default function Signup() {
  return (
    <>
      <HeaderView
        title={strings.signup.title}
        hasClose
        onClose={() => goBack()}
      />
      <SafeArea style={styles.container} />
    </>
  )
}
