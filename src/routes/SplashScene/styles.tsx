import { StyleSheet } from 'react-native'
import COLORS from 'constants/COLORS'

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 36,
    color: COLORS.text,
    textAlign: 'center'
  },
  jailbrokenMsg: {
    fontSize: 20,
    padding: 20
  }
})

export default styles
