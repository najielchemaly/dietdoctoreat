import {Alert} from 'react-native'
import TouchID from 'react-native-touch-id'

import strings from '../constants/strings'

export default function FingerPrintAuth() {
  async function isSupported() {
    try {
      const type = await TouchID.isSupported()
      console.log(type)
      return true
    } catch (e) {
      return false
    }
  }

  function authenticate() {
    return new Promise((resolve, reject) => {
      if (isSupported()) {
        return TouchID.authenticate()
          .then((result) => resolve(result))
          .catch((error) => reject(error))
      } else {
        Alert.alert(null, strings.common.touchIdNotSupported)
        reject()
      }
    })
  }

  return {authenticate}
}
