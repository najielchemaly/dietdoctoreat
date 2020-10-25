import {CommonActions} from '@react-navigation/native'

let navigation = null

export function setTopLevelNavigator(navigatorRef) {
  navigation = navigatorRef
}

export function navigateToStack(stack, params) {
  navigation.dispatch(CommonActions.navigate(stack, params))
}

export function resetToStack(stack) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: stack}],
    }),
  )
}

export function goBack() {
  navigation.goBack()
}
