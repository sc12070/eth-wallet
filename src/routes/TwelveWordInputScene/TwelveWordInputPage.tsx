import CustomButton from 'components/CustomButton/CustomButton'
import Loading from 'components/Loading/Loading'
import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WordInput from './components/WordInput'
import { IInputItem } from './modal/InputItemModal'
import styles from './styles'
import useTwelveWordInputPageHooks from './useTwelveWordInputPageHooks'

const TwelveWordInputPage = () => {
  const { isLoading, refList, onReturnPress, onSubmit, onPaste, onTipsPress } =
    useTwelveWordInputPageHooks()

  const renderItem = ({ item, index }: { item: IInputItem; index: number }) => (
    <WordInput inputRef={item} index={index} onReturnPress={onReturnPress} onPaste={onPaste} />
  )

  const keyExtractor = (_: any, index: number) => `input-${index}`

  return (
    <SafeAreaView style={styles.bg}>
      <Text style={styles.text}>Please enter twelve-word recovery seed to login</Text>
      <FlatList
        style={styles.list}
        data={refList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={3}
      />
      <TouchableOpacity onPress={onTipsPress}>
        <Text style={[styles.tips]}>What is twelve-word recovery seed?</Text>
      </TouchableOpacity>
      <CustomButton style={styles.submitBtn} text="OK" onPress={onSubmit} />
      {isLoading && <Loading />}
    </SafeAreaView>
  )
}

export default TwelveWordInputPage
