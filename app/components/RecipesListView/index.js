import React from 'react'
import {Text} from 'react-native'

import styles from './styles'
import ContentFlatList from '../ContentFlatList'
import RecipesListItem from './RecipesListItem'

export default function RecipesListView(props) {
  const {title, items, onPress} = props

  return (
    <>
      <Text style={styles.title}>{title || 'New recipes'}</Text>
      <ContentFlatList
        data={items}
        contentContainerStyle={styles.carouselContainer}
        keyExtractor={(item, rowIndex) => item + rowIndex}
        renderItem={({item}) => (
          <RecipesListItem item={item} onPress={onPress} />
        )}
        horizontal
      />
    </>
  )
}

RecipesListView.defaultProps = {
  items: [],
}
