import { StyleSheet } from 'react-native'
import COLORS from 'constants/COLORS'

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 10
  },
  content: {
    flex: 1
  },
  text: {
    color: COLORS.text
  },
  address: {
    fontSize: 15
  },
  balance: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 50
  },
  logoutBtn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.bg
  }
})

export default styles
