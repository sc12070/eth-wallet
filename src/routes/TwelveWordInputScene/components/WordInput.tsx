import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { IInputItem } from '../modal/InputItemModal'
import styles from './styles'
import useWordInputHooks from './useWordInputHooks'

const WordInput = ({
  inputRef,
  index,
  onReturnPress,
  onPaste
}: {
  inputRef: IInputItem
  index: number
  onReturnPress: (index: number) => void
  onPaste: (words: string) => void
}) => {
  const { indexDisplay, returnKeyType, onChangeText, onSubmitEditing } = useWordInputHooks({
    inputRef,
    index,
    onReturnPress,
    onPaste
  })

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.text}>{indexDisplay}.</Text>
      <TextInput
        ref={inputRef.textInputRef}
        returnKeyType={returnKeyType}
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  )
}

export default WordInput
