import React from 'react'
import {AppRegistry, I18nManager, LogBox} from 'react-native'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Config from 'react-native-config'

import App from './app/index'
import {name as appName} from './app.json'

// Remove on production
LogBox.ignoreAllLogs(true)

I18nManager.allowRTL(true)

// Initialize Apollo Client
const client = new ApolloClient({
  uri: `${Config.BASE_URL}/v1`,
  cache: new InMemoryCache(),
})

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => Root)
