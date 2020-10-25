import {StyleSheet} from 'react-native'

import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.robotoRegular,
    fontSize: 15,
    marginLeft: 10,
  },
  switch: {transform: [{scale: 0.8}]},
})
