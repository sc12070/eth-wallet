import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorageHelper from 'utils/AsyncStorageHelper'
import { connectWithPrivateKey } from 'utils/EthersHelper'
import SecureStoreHelper from 'utils/SecureStoreHelper'
import JailMonkey from 'jail-monkey'

export default () => {
  const [isJailBroken, setIsJailBroken] = useState<boolean>(false)

  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const retrievePrivateKey = useCallback(async () => {
    try {
      const key = await SecureStoreHelper.getWithAuth('privateKey')
      if (typeof key === 'string') {
        const wallet = await connectWithPrivateKey(key)
        if (wallet !== null) {
          navigation.reset({ index: 0, routes: [{ name: 'Home', params: { wallet } }] })
        } else {
          throw {}
        }
      } else {
        navigation.reset({ index: 0, routes: [{ name: 'TwelveWordInput' }] })
      }
    } catch (error) {
      console.log('useSplashPageHooks.retrievePrivateKey', error)
      console.warn(
        'Please enroll the FaceId/TouchId of simulator. Feature -> FaceId -> Enroll (check)'
      )
      Alert.alert('Login Failed', 'Please try again', [
        {
          text: 'Cancel',
          onPress: () => {
            navigation.navigate('TwelveWordInput')
          }
        },
        {
          text: 'Retry',
          onPress: () => {
            retrievePrivateKey()
          }
        }
      ])
    }
  }, [navigation])

  const checkIsLogined = useCallback(async () => {
    try {
      const isLoginedData = await AsyncStorageHelper.get('isLogined')
      return isLoginedData === 'Y' ? true : false
    } catch {
      return false
    }
  }, [])

  const init = useCallback(async () => {
    if (JailMonkey.isJailBroken()) {
      setIsJailBroken(true)
      return
    }
    const isLogined = await checkIsLogined()
    if (isLogined) {
      retrievePrivateKey()
    } else {
      navigation.navigate('TwelveWordInput')
    }
  }, [checkIsLogined, retrievePrivateKey, navigation])

  useEffect(() => {
    init()
  }, [init])

  return {
    isJailBroken
  }
}
