import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import SafeArea from '../../../components/SafeArea'
import strings from '../../../constants/strings'
import HeaderView from '../../../components/HeaderView'
import ListItem from '../../../components/ListItem'
import ContentFlatList from '../../../components/ContentFlatList'
import {
  loggedInSettingsItems,
  settingsItems,
  versionNumber,
} from '../../../constants/dummyData'
import {logout, openStore} from '../../../constants/functions'
import {navigateToStack} from '../../../navigation'
import DDTextButton from '../../../components/DDTextButton'

export default function Settings() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState(settingsItems)

  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      if (token) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)

        const newData = settingsItems.concat(loggedInSettingsItems)
        setData(Array.from(newData))
      }
    })
  }, [])

  function handleOnItemPress(item) {
    const {link, screen, action} = item
    if (link) {
      openStore(link)
    }

    if (screen) {
      const {name, params} = screen
      navigateToStack(name, params)
    }

    if (action) {
      action()
    }
  }

  function renderListItem({item}) {
    return (
      <ListItem title={item.title} onPress={() => handleOnItemPress(item)} />
    )
  }

  function renderLoginView() {
    return loggedIn ? (
      <DDTextButton
        title={strings.settings.logout}
        titleStyle={styles.logout}
        onPress={() => logout()}
      />
    ) : (
      <Text style={styles.loginTitle}>{strings.settings.notLoggedIn}</Text>
    )
  }

  return (
    <>
      <HeaderView title={strings.tabbar.settings} />
      <SafeArea style={styles.safeArea} lightStatus>
        <View style={styles.container}>
          <ContentFlatList
            scrollEnabled={false}
            style={styles.contentView}
            keyExtractor={(item, index) => item + index}
            data={data}
            renderItem={renderListItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
        <View style={styles.loginView}>
          {renderLoginView()}
          <Text style={styles.appVersion}>
            {strings.appName} {versionNumber}
          </Text>
        </View>
      </SafeArea>
    </>
  )
}
