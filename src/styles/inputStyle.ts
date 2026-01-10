import { StyleSheet } from 'react-native'
import { darkGrey, boxShadowColor } from './colors'

export const inputStyles = StyleSheet.create({
      inputBox: {
        backgroundColor: darkGrey,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        shadowColor: boxShadowColor,
      },
      inputText: {
        color: '#999',
        fontFamily: 'press-start-2p',
        fontSize: 9,
        padding: 10,
      },
})