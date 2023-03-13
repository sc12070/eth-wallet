import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import useTwelveWordTipsModalHooks from './useTwelveWordTipsModalHooks'

const TwelveWordTipsModal = () => {
  const { onClose } = useTwelveWordTipsModalHooks()

  return (
    <SafeAreaView style={styles.bg}>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <Text style={styles.btnText}>x</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        A 12-word seed phrase acts as a key to unlock access to a crypto wallet and is also the
        ultimate recovery tool for wallets on the blockchain.
      </Text>
    </SafeAreaView>
  )
}

export default TwelveWordTipsModal
