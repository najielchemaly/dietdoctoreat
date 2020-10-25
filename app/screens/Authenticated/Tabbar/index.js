import React from 'react'
import {Platform} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import styles from './styles'
import TabIcon from './TabIcon'
import {isIphoneX} from '../../../constants/variables'
import strings from '../../../constants/strings'
import screenName from '../../../constants/screenName'
import colors from '../../../constants/colors'
import Recipes from '../Recipes'
import recipesIcon from '../../../assets/icons/recipesIcon/recipesIcon.png'
import MealPlans from '../MealPlans'
import scheduleIcon from '../../../assets/icons/scheduleIcon/scheduleIcon.png'
import Settings from '../Settings'
import settingsIcon from '../../../assets/icons/settingsIcon/settingsIcon.png'

const TabStack = createBottomTabNavigator()

export default function TabStackScreen() {
  return (
    <TabStack.Navigator
      initialRouteName={screenName.recipes}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.offWhite,
        activeBackgroundColor: colors.green,
        inactiveBackgroundColor: colors.green,
        ...(isIphoneX && {tabStyle: styles.iPhoneXTabbar}),
        ...(Platform.isPad && {
          style: styles.iPadTabbar,
          tabStyle: styles.iPadTabbar,
        }),
      }}>
      <TabStack.Screen
        name={screenName.recipes}
        component={Recipes}
        options={{
          title: strings.tabbar.recipes,
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={recipesIcon}
              tintColor={focused ? colors.white : colors.offWhite}
            />
          ),
        }}
      />
      <TabStack.Screen
        name={screenName.mealPlans}
        component={MealPlans}
        options={{
          title: strings.tabbar.mealPlans,
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={scheduleIcon}
              tintColor={focused ? colors.white : colors.offWhite}
            />
          ),
        }}
      />
      <TabStack.Screen
        name={screenName.settings}
        component={Settings}
        options={{
          title: strings.tabbar.settings,
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={settingsIcon}
              tintColor={focused ? colors.white : colors.offWhite}
            />
          ),
        }}
      />
    </TabStack.Navigator>
  )
}
