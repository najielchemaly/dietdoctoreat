import AsyncStorage from '@react-native-community/async-storage'

import API from '../..'

export default function APISignin(username, password) {
  return API(false).then((axios) => {
    return axios
      .post('/auth/create', {username, password})
      .then(async (result) => {
        const {token} = result.data
        await AsyncStorage.setItem('token', token)
        return JSON.stringify(result.data)
      })
      .catch((error) => {
        throw error.response
      })
  })
}
