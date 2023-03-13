import { StyleSheet } from 'react-native'
import COLORS from 'constants/COLORS'

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    padding: 5,
    width: '33%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    width: 25,
    fontSize: 20,
    textAlign: 'right',
    marginRight: 5,
    color: COLORS.text
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 5,
    flex: 1,
    height: '100%',
    color: COLORS.text,
    borderColor: COLORS.dimGray,
    borderWidth: 1,
    borderRadius: 5
  }
})

export default styles
