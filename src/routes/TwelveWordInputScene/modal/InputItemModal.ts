import { MutableRefObject, RefObject } from 'react'
import { TextInput } from 'react-native'

export interface IInputItem {
  textInputRef: RefObject<TextInput>
  valueRef: MutableRefObject<string>
}
