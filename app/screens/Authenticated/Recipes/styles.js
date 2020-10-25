import {StyleSheet} from 'react-native'

import colors from '../../../constants/colors'
import fonts from '../../../constants/fonts'

export default StyleSheet.create({
  sectionList: {flex: 1},
  sectionListContainer: {paddingBottom: 20},
  sectionHeader: {
    backgroundColor: colors.white,
    fontFamily: fonts.robotoBold,
    fontSize: 20,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
})
