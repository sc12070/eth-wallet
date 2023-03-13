import { StyleSheet } from 'react-native'
import COLORS from 'constants/COLORS'

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 30,
    color: COLORS.text,
    textAlign: 'center'
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  tips: {
    fontSize: 15,
    color: COLORS.blue
  },
  submitBtn: {
    marginTop: 10
  }
})

export default styles
