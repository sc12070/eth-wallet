import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import styles from './styles'

const CustomButton = ({
  text,
  style,
  onPress
}: {
  text: string
  style?: StyleProp<ViewStyle>
  onPress: () => void
}) => {
  return (
    <TouchableOpacity style={[styles.btnWrapper, style]} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
