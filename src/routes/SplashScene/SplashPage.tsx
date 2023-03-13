import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import useSplashPageHooks from './useSplashPageHooks'

const SplashPage = () => {
  const { isJailBroken } = useSplashPageHooks()

  return (
    <SafeAreaView style={styles.bg}>
      <Text style={styles.text}>ETH Wallet</Text>
      {isJailBroken && (
        <Text style={[styles.text, styles.jailbrokenMsg]}>
          Sorry, in orther to protect your properties, our application do not support jail breaked
          device.
        </Text>
      )}
    </SafeAreaView>
  )
}

export default SplashPage
