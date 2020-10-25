import {StyleSheet} from 'react-native'

import colors from '../../../constants/colors'
import fonts from '../../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  imageBackground: {height: '100%', backgroundColor: colors.green},
  safeArea: {backgroundColor: colors.transparent},
  contentView: {width: '100%'},
  logo: {
    tintColor: colors.white,
    resizeMode: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  logoHint: {
    color: colors.white,
    fontFamily: fonts.robotoRegular,
    fontSize: 13,
    textAlign: 'center',
    marginTop: -10,
  },
  buttonMargin: {marginVertical: 15},
})
