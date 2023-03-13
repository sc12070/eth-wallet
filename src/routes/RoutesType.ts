import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Wallet } from 'ethers'

export type StackParamList = {
  Splash: undefined
  TwelveWordInput: undefined
  Home: {
    wallet: Wallet
  }
  TwelveWordTips: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

export default Stack
