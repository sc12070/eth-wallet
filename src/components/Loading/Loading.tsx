import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import styles from './styles'

const Loading = () => {
  return (
    <View style={styles.cover}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading
