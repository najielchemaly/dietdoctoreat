import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import SafeArea from '../../../components/SafeArea'
import ContentSectionList from '../../../components/ContentSectionList'
import RecipesListView from '../../../components/RecipesListView'
import HeaderView from '../../../components/HeaderView'
import {recipesType} from '../../../constants/variables'
import strings from '../../../constants/strings'
import APIGetFreeRecipes from '../../../services/Recipes/APIGetFreeRecipes'
import LoaderView from '../../../components/LoaderView'

export default function Recipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    AsyncStorage.setItem('goToDashboard', 'true')

    fetchRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function fetchRecipes() {
    APIGetFreeRecipes()
      .then((result) => {
        const {data} = result

        /*** This is just dummy data ***/
        data.listRecipes.recipes.forEach((item, index) => {
          item.isMembersOnly = index % 2 === 0
        })
        /*** END ***/

        recipes.push({
          title: strings.recipes.newRecipes,
          type: recipesType.newRecipes,
          data: [
            {
              items: data.listRecipes.recipes,
            },
          ],
        })
        setRecipes(Array.from(recipes))
      })
      .catch((error) => console.log(error))
  }

  function renderSectionItem({section}) {
    const {data, type} = section
    const items = data[0].items

    switch (type) {
      case recipesType.dinnerIdeas:
      case recipesType.newRecipes:
        return <RecipesListView items={items} />
      case recipesType.offer:
      default:
        return null
    }
  }

  return (
    <>
      <HeaderView title={strings.tabbar.recipes} />
      <SafeArea lightStatus>
        <ContentSectionList
          style={styles.sectionList}
          contentContainerStyle={styles.sectionListContainer}
          sections={recipes}
          keyExtractor={(item, index) => item + index}
          renderItem={renderSectionItem}
        />
        <LoaderView visible />
      </SafeArea>
    </>
  )
}
