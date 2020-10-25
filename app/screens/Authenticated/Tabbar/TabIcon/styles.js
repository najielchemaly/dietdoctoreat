import {StyleSheet} from 'react-native'

import colors from '../../../../constants/colors'
import fonts from '../../../../constants/fonts'

export default StyleSheet.create({
  notificationView: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    right: 15,
    zIndex: 1,
  },
  notificationText: {
    color: colors.white,
    fontFamily: fonts.robotoMedium,
    fontSize: 11,
  },
  defaultIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
    resizeMode: 'center',
  },
})
