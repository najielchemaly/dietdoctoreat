import NetInfo from '@react-native-community/netinfo'

function addEventListener() {
  // Subscribe
  const unsubscribe = NetInfo.addEventListener((state) => {
    console.log(state.isConnected)
  })
  unsubscribe()
}

function checkConnectivity() {
  return NetInfo.fetch()
    .then((state) => {
      return state.isConnected
    })
    .catch(() => false)
}

export default {checkConnectivity, addEventListener}
