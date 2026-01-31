import { StyleSheet } from 'react-native'
import { boxShadowColor, commonFontColor, darkGrey, grey, purple } from './colors'


export default StyleSheet.create({
    container: {
        backgroundColor: grey,
        width: '90%',
        height: '85%',
    },
    border: {
        borderColor: purple,
        borderWidth: 3,
        borderRadius: 10,
    },
    goButtonText: {
        color: commonFontColor,
        backgroundColor: darkGrey,
        elevation: 5,
        shadowColor: boxShadowColor,
        padding: 10
    },
    goButtonBorder: {
        borderColor: purple,
        borderWidth: 3,
        borderRadius: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})