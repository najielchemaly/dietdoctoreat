import AsyncStorage from '@react-native-community/async-storage'

import API from '../..'

export default async function APIRefreshToken() {
  const refresh_token = await AsyncStorage.getItem('refresh_token')
  return API(false).then((axios) =>
    axios
      .post('/auth/refresh', {refresh_token})
      .then(async (result) => {
        await AsyncStorage.setItem('token', result.data.id)
        return result.data
      })
      .catch((error) => {
        throw error
      }),
  )
}
