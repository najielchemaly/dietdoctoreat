import {StyleSheet} from 'react-native'

import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

export default StyleSheet.create({
  container: {width: '100%'},
  title: {
    color: colors.lightGrey,
    fontFamily: fonts.robotoBold,
    fontSize: 13,
    marginBottom: 10,
  },
  textInputContainer: {
    minHeight: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
  textInput: {
    flex: 1,
    color: colors.black,
    fontFamily: fonts.robotoRegular,
    fontSize: 15,
    padding: 5,
  },
  boldText: {
    color: colors.black,
    fontFamily: fonts.robotoBold,
    fontSize: 14,
    paddingVertical: 8,
    paddingLeft: 5,
  },
  inputError: {color: colors.error, borderColor: colors.error},
  disabled: {opacity: 0.5},
  multiline: {minHeight: 70, marginVertical: 10},
})
