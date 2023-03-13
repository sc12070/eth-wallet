import { StyleSheet } from 'react-native'
import COLORS from 'constants/COLORS'

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  closeBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.inverseBg,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 10
  },
  btnText: {
    ontSize: 20,
    color: COLORS.bg,
    fontWeight: '900'
  },
  text: {
    padding: 20,
    fontSize: 15,
    color: COLORS.text
  }
})

export default styles
