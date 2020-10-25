import {StyleSheet} from 'react-native'

import fonts from '../../constants/fonts'

export default StyleSheet.create({
  carouselContainer: {flexGrow: 1, paddingVertical: 10},
  pageControl: {position: 'absolute', bottom: 20, width: '100%'},
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: 20,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
})
