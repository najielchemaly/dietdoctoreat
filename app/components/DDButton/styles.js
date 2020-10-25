import {StyleSheet} from 'react-native'

import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: colors.green,
    alignItems: 'center',
  },
  darkContainer: {backgroundColor: colors.darkGrey},
  title: {
    color: colors.white,
    fontFamily: fonts.robotoBold,
    fontSize: 18,
  },
})
