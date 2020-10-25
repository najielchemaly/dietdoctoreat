import AsyncStorage from '@react-native-community/async-storage'
import Config from 'react-native-config'
import axios from 'axios'

import network from '../constants/network'
import {sessionTimeout} from '../constants/functions'
import LoaderView from '../components/LoaderView'
import APIRefreshToken from './User/APIRefreshToken'
import {Alert} from 'react-native'
import strings from '../constants/strings'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export default function API(requireToken = true) {
  return network.checkConnectivity().then((connected) => {
    if (connected) {
      return AsyncStorage.getItem('token').then((token) => {
        const api = axios.create({
          timeout: 30000,
          baseURL: Config.BASE_URL,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...(requireToken && {Authorization: `Bearer ${token}`}),
          },
        })

        api.interceptors.response.use(
          (response) => {
            LoaderView.hide()
            return response
          },
          (error) => {
            LoaderView.hide()

            if (error.message === 'Network Error') {
              throw error.message
            }
            if (!requireToken) {
              throw error
            }

            const response = error.response
            if (response) {
              switch (response.status) {
                case 403:
                  APIRefreshToken()
                    .then((data) => {})
                    .catch(() => sessionTimeout())
                  break
                case 401:
                  sessionTimeout()
                  break
                default:
                  throw error
              }
            } else {
              throw error
            }
          },
        )

        return api
      })
    } else {
      LoaderView.hide()
      Alert.alert(strings.common.noConnection, strings.common.noConnectionDesc)
    }
  })
}
