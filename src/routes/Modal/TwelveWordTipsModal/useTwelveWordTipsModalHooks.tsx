import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useCallback } from 'react'

export default () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const onClose = useCallback(() => navigation.pop(), [navigation])

  return {
    onClose
  }
}
