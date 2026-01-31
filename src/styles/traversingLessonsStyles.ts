import { StyleSheet } from 'react-native'
import { boxShadowColor, commonFontColor, darkGrey, purple } from './colors'


export default StyleSheet.create({
    container:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text:{
        color: commonFontColor,
        fontSize: 10,
        fontFamily: 'press-start-2p'
    },
    bg:{
        backgroundColor: darkGrey,
        width: 144,
        height: 58,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: purple,
        elevation: 5,
        shadowColor: boxShadowColor
    }
})