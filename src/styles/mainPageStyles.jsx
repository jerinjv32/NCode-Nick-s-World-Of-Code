import { StyleSheet } from 'react-native'
import { boxShadowColor, commonFontColor, darkGrey, grey, purple } from './colors'


export default StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: grey,
        width: 375,
        height: 530,
    },
    border:{
        borderColor: purple,
        borderWidth: 3,
        borderRadius: 10,
    },
    levels:{
        marginTop: 20,
        color: commonFontColor,
        textAlign: 'center',
        fontFamily: 'press-start-2p',
        fontSize: 16
    },
    lessons:{
        marginTop: 20,
        color: commonFontColor,
        textAlign: 'center',
        fontFamily: 'press-start-2p',
        fontSize: 13
    },
    goButtonPosition:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    goButton:{
        backgroundColor: darkGrey,
        height: 84,
        width: 84,
        elevation: 5,
        shadowColor: boxShadowColor
    },
    goButtonText:{
      color: commonFontColor,
      fontFamily: 'press-start-2p',
      fontSize: 16,  
    },
    goButtonBorder:{
        borderColor: purple,
        borderWidth: 3,
        borderRadius: 10
    },
    lessonProgression:{ 
        width: 300,
        height: 100,
        marginTop: 160,
        marginBottom: 50,
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})