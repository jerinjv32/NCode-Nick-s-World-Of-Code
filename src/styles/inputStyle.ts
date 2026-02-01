import { StyleSheet } from 'react-native'
import { darkGrey, boxShadowColor } from './colors'

export const inputStyles = StyleSheet.create({
      inputBox: {
        marginVertical: 14,
        width: '90%',
        height: 70,
        backgroundColor: darkGrey,
        borderRadius: 10,
        elevation: 5,
        shadowColor: boxShadowColor,
      },
      inputText: {
        // backgroundColor: 'red',
        width: '100%',
        color: '#999',
        fontFamily: 'press-start-2p',
        fontSize: 9,
        paddingLeft: 15,
        paddingRight: 15,
      }
})