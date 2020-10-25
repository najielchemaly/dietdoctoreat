import {StyleSheet} from 'react-native'

import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  ratingStar: {width: 15, height: 15, tintColor: colors.green, marginRight: 5},
})
