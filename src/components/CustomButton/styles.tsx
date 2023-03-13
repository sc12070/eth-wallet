import { StyleSheet } from 'react-native'
import COLORS from 'constants/COLORS'

const styles = StyleSheet.create({
  btnWrapper: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    marginBottom: 5
  },
  btnText: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.bg
  }
})

export default styles
