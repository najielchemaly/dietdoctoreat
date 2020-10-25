import {StyleSheet} from 'react-native'

import colors from '../../../constants/colors'
import fonts from '../../../constants/fonts'

export default StyleSheet.create({
  imageBackground: {height: '100%', opacity: 0.9},
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    position: 'absolute',
    opacity: 0.7,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  headerView: {backgroundColor: colors.transparent},
  safeArea: {backgroundColor: colors.transparent},
  contentView: {width: '100%'},
  subscribeInfo: {
    color: colors.white,
    fontFamily: fonts.robotoMedium,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: '10%',
  },
  buttonMargin: {marginVertical: 15},
  noThanks: {marginTop: 20},
})
