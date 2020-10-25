import React from 'react'
import {Image, View} from 'react-native'

import styles from './styles'
import starIconOn from '../../assets/icons/starIconOn/starIconOn.png'
import starIconOff from '../../assets/icons/starIconOff/starIconOff.png'

export default function RatingStar(props) {
  const {maxRate, rating} = props

  function renderRatings() {
    let ratings = []
    for (let index = 0; index < maxRate; index++) {
      ratings.push(
        <Image
          key={index}
          style={styles.ratingStar}
          source={index < Math.round(rating) ? starIconOn : starIconOff}
        />,
      )
    }
    return ratings
  }

  return <View style={styles.container}>{renderRatings()}</View>
}

RatingStar.defaultProps = {
  maxRate: 5,
}
