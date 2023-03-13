import { NativeStackScreenProps } from '@react-navigation/native-stack'
import CustomButton from 'components/CustomButton/CustomButton'
import Loading from 'components/Loading/Loading'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackParamList } from 'routes/RoutesType'
import styles from './styles'
import useHomePageHooks from './useHomePageHooks'

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>

const HomePage = (props: HomeProps) => {
  const { wallet } = props.route.params

  const { isLoading, balance, address, onLogout } = useHomePageHooks(wallet)

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.content}>
        <Text style={[styles.text, styles.balance]}>{balance} ETH</Text>
        <Text style={[styles.text, styles.address]}>Address</Text>
        <Text style={[styles.text, styles.address]}>{address}</Text>
      </View>
      <CustomButton text="Logout" onPress={onLogout} />
      {isLoading && <Loading />}
    </SafeAreaView>
  )
}

export default HomePage
