import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Wallet } from 'ethers'
import { useCallback, useRef, useState } from 'react'
import { Alert, Keyboard, TextInput } from 'react-native'
import { recoveryByTwelveWord, savePrivateKey } from 'utils/EthersHelper'
import { IInputItem } from './modal/InputItemModal'

export default () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const refList: Array<IInputItem> = new Array(12).fill(null).map(() => ({
    textInputRef: useRef<TextInput>(null),
    valueRef: useRef<string>('')
  }))

  const onGetWalletSuccess = useCallback(
    async (wallet: Wallet) => {
      const rslt = await savePrivateKey(wallet.privateKey)
      if (rslt === false) {
        Alert.alert(
          'Save private key failed',
          'You can still view the balance but you may not able to login by biometric authentication.\nPlease check your biometic setting.'
        )
      }
      navigation.reset({ index: 0, routes: [{ name: 'Home', params: { wallet } }] })
    },
    [navigation]
  )

  const getWallet = useCallback(
    (words: string) => {
      Keyboard.dismiss()
      setIsLoading(true)
      setTimeout(async () => {
        // solve loading cannot be showen
        const wallet = await recoveryByTwelveWord(words)
        if (wallet !== null) {
          onGetWalletSuccess(wallet)
        } else {
          Alert.alert('Invalid words', 'Please check your inputs')
        }
        setIsLoading(false)
      }, 1)
    },
    [onGetWalletSuccess]
  )

  const onSubmit = useCallback(() => {
    const wordString = refList.reduce(
      (accumulator, ref) => `${accumulator} ${ref.valueRef.current || ''}`,
      ''
    )
    getWallet(wordString.trim())
  }, [refList, getWallet])

  const onReturnPress = useCallback(
    (index: number) => {
      if (index < 11) {
        refList[index + 1].textInputRef.current?.focus()
      } else {
        onSubmit()
      }
    },
    [refList, onSubmit]
  )

  const onPaste = useCallback(async (words: string) => getWallet(words), [getWallet])

  const onTipsPress = useCallback(() => navigation.navigate('TwelveWordTips'), [navigation])

  return {
    isLoading,
    refList,
    onSubmit,
    onReturnPress,
    onPaste,
    onTipsPress
  }
}
