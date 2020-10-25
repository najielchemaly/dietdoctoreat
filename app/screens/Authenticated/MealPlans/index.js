import React, {useReducer} from 'react'
import {RefreshControl, Text, View} from 'react-native'
import {useQuery, gql} from '@apollo/client'

import styles from './styles'
import SafeArea from '../../../components/SafeArea'
import strings from '../../../constants/strings'
import HeaderView from '../../../components/HeaderView'
import ContentFlatList from '../../../components/ContentFlatList'
import colors from '../../../constants/colors'
import {MEAL_PLAN_FRAGMEMT} from '../../../graphql/fragments/mealplan.fragment'
import {FREE_MEAL_PLAN_QUERY} from '../../../graphql/queries/freemealplans.query'
import MealListItem from '../../../components/MealListItem'
import DDButton from '../../../components/DDButton'

export default function MealPlans() {
  const refresh = useReducer(() => ({}), {})[1]

  const query = gql`
    ${MEAL_PLAN_FRAGMEMT}
    ${FREE_MEAL_PLAN_QUERY}
  `
  const {loading, data} = useQuery(query)
  const dataList = data ? data.freeMealplans : []

  function renderListEmptyComponent() {
    return (
      !loading &&
      dataList.length === 0 && (
        <View>
          <Text style={styles.emptyTitle}>
            {strings.common.couldNotFetchData}
          </Text>
          <DDButton
            style={styles.retryButton}
            title={strings.common.retryAgain}
          />
        </View>
      )
    )
  }

  return (
    <>
      <HeaderView title={strings.tabbar.mealPlans} />
      <SafeArea>
        <ContentFlatList
          data={dataList}
          keyExtractor={(item, index) => (item + index).toString()}
          contentContainerStyle={[
            styles.contentContainer,
            dataList.length === 0 && styles.emptyContainer,
          ]}
          scrollEnabled
          renderItem={({item}) => <MealListItem item={item} />}
          ListEmptyComponent={renderListEmptyComponent}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refresh}
              tintColor={colors.darkGrey}
            />
          }
        />
      </SafeArea>
    </>
  )
}
