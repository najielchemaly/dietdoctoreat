import {StyleSheet} from 'react-native'

import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  icon: {width: 12, height: 12, resizeMode: 'contain'},
  title: {color: colors.darkGrey, fontFamily: fonts.robotoRegular},
})
