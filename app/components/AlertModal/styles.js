import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    position: 'absolute',
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
  },
  iconContainer: {
    borderRadius: 30,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 10,
  },
  icon: {
    height: 20,
    aspectRatio: 1,
    tintColor: colors.white,
    resizeMode: 'contain',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.robotoBold,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  primaryButton: {
    position: 'absolute',
    marginTop: -20,
    width: '50%',
    zIndex: 1,
  },
  viewContainer: {
    alignItems: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: colors.white,
  },
  secondaryButton: {width: '100%'},
  secondaryTitle: {
    color: colors.darkGrey,
    marginTop: 30,
    marginBottom: 15,
  },
  modalView: {flex: 2, justifyContent: 'flex-end'},
  cancelContainer: {flex: 1, justifyContent: 'flex-end'},
  cancel: {position: 'absolute', bottom: getStatusBarHeight()},
})
