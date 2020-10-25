import React, {useState} from 'react'
import {Image, ImageBackground, Text, View} from 'react-native'
import Config from 'react-native-config'

import RatingStar from '../../RatingStar'
import TouchableView from '../../TouchableView'
import styles from './styles'
import lockImage from '../../../assets/images/lock.png'

export default function RecipesListItem(props) {
  const {item, onPress} = props
  const {images, isMembersOnly, title, rating} = item
  const [loadingImage, setLoadingImage] = useState(true)

  const placeholder = require('../../../assets/animations/placeholder.gif')
  const imageUrl = `${Config.MEDIA_URL}${images.hz}${Config.MEDIA_QUERY}`

  return (
    <TouchableView
      style={styles.container}
      onPress={onPress}
      disabled={isMembersOnly}>
      {isMembersOnly && (
        <View style={styles.lockView}>
          <View style={styles.overlay} />
          <Image style={styles.lockIcon} source={lockImage} />
        </View>
      )}
      <ImageBackground
        style={styles.imageBackground}
        source={loadingImage ? placeholder : null}>
        <Image
          style={styles.image}
          source={imageUrl ? {uri: imageUrl} : null}
          onLoadEnd={() => setLoadingImage(false)}
        />
      </ImageBackground>
      <View style={styles.contentView}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <RatingStar rating={rating} />
      </View>
    </TouchableView>
  )
}
