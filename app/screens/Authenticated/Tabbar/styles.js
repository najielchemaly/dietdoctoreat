import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import {isIphoneX} from '../../../constants/variables'
import colors from '../../../constants/colors'

export default StyleSheet.create({
  floatingIcon: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  iphoneXFloatingIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    bottom: 5,
  },
  floatingContainer: {
    height: isIphoneX ? getStatusBarHeight() * 2 : '100%',
    backgroundColor: colors.xLightGrey,
    justifyContent: isIphoneX ? 'center' : 'flex-start',
  },
  iPhoneXTabbar: {
    height: getStatusBarHeight() * 2,
    paddingBottom: getStatusBarHeight() / 1.5,
  },
  iPadTabbar: {},
})
