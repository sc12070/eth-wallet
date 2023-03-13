import { useCallback, useMemo } from 'react'
import { ReturnKeyTypeOptions } from 'react-native/types'
import { IInputItem } from '../modal/InputItemModal'

export default ({
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
  const indexDisplay = useMemo<number>(() => index + 1, [index])

  const returnKeyType = useMemo<ReturnKeyTypeOptions>(
    () => (index === 11 ? 'done' : 'next'),
    [index]
  )

  const onChangeText = useCallback(
    (text: string) => {
      const textList = text.trim().split(' ')
      if (textList.length === 12) {
        inputRef.textInputRef.current?.clear()
        onPaste(text)
        return
      }
      inputRef.valueRef.current = text
    },
    [inputRef, onPaste]
  )

  const onSubmitEditing = useCallback(() => {
    onReturnPress(index)
  }, [index, onReturnPress])

  return {
    indexDisplay,
    returnKeyType,
    onChangeText,
    onSubmitEditing
  }
}
