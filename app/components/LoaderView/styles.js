import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

export default StyleSheet.create({
  container: {
    top: getStatusBarHeight(),
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
