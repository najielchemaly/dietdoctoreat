import {Dimensions, StyleSheet} from 'react-native'

import colors from '../../../constants/colors'
import fonts from '../../../constants/fonts'

export default StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.6,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
  },
  imageBackground: {width: '100%', aspectRatio: 4 / 3},
  image: {width: '100%', height: '100%'},
  contentView: {backgroundColor: colors.white, padding: 15},
  title: {fontFamily: fonts.robotoBold, fontSize: 15, marginBottom: 5},
  lockView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
  },
  overlay: {
    backgroundColor: colors.black,
    opacity: 0.5,
    height: '100%',
  },
  lockIcon: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    tintColor: colors.white,
    alignSelf: 'center',
  },
})
