import {StyleSheet} from 'react-native'

import colors from '../../../constants/colors'

export default StyleSheet.create({
  imageBackground: {height: '100%', opacity: 0.9},
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    position: 'absolute',
    opacity: 0.7,
  },
  headerView: {backgroundColor: colors.transparent},
  safeArea: {backgroundColor: colors.transparent},
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  contentView: {width: '100%'},
  buttonMargin: {marginVertical: 15},
  forgotPassword: {marginTop: 20},
  switchContainer: {marginVertical: 15},
})
