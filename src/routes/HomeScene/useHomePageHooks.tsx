import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ethers, Wallet } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { removePrivateKey } from 'utils/EthersHelper'

export default (wallet: Wallet) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [balance, setBalance] = useState<string>('')
  const [address, setAddress] = useState<string>('-')

  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const init = useCallback(async () => {
    setIsLoading(true)
    setAddress(wallet.address)
    const balanceNum = await wallet.getBalance()
    setBalance(ethers.utils.formatEther(balanceNum))
    setIsLoading(false)
  }, [wallet])

  const onLogout = useCallback(async () => {
    Alert.alert(
      'Are you sure you want to log out?',
      'You may login again by twelve words recovery seed',
      [
        {
          text: 'Cancel'
        },
        {
          text: 'Confirm',
          onPress: async () => {
            await removePrivateKey()
            navigation.reset({ index: 0, routes: [{ name: 'Splash' }] })
          }
        }
      ]
    )
  }, [navigation])

  useEffect(() => {
    init()
  }, [init])

  return {
    isLoading,
    balance,
    address,
    onLogout
  }
}
