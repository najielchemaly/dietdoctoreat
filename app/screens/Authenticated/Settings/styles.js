import {StyleSheet} from 'react-native'

import colors from '../../../constants/colors'
import fonts from '../../../constants/fonts'

export default StyleSheet.create({
  safeArea: {
    backgroundColor: colors.xLightGrey,
    justifyContent: 'space-between',
  },
  container: {padding: 10},
  contentView: {width: '100%', backgroundColor: colors.white},
  systemButton: {color: colors.black, marginVertical: 10},
  separator: {width: '100%', height: 1, backgroundColor: colors.xLightGrey},
  loginView: {backgroundColor: colors.white, padding: 15},
  loginTitle: {
    color: colors.yellow,
    textAlign: 'center',
    fontFamily: fonts.robotoRegular,
    fontSize: 13,
    marginBottom: 15,
  },
  appVersion: {
    color: colors.darkGrey,
    textAlign: 'center',
    fontFamily: fonts.robotoRegular,
    fontSize: 11,
  },
  logout: {color: colors.error, paddingHorizontal: 15, marginBottom: 15},
})
