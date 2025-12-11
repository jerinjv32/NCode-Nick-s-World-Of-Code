import { StyleSheet, Text, View } from 'react-native'
import NextBtn from '../../assets/svg/Next'


export default StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: '#2F2F2F',
        width: 375,
        height: 530,
    },
    border:{
        borderColor: '#35315C',
        borderWidth: 3,
        borderRadius: 10,
    },
    levels:{
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'press-start-2p',
        fontSize: 16
    },
    lessons:{
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'press-start-2p',
        fontSize: 13
    },
    goButtonPosition:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    goButton:{
        backgroundColor: '#212020',
        height: 84,
        width: 84,
        elevation: 5,
        shadowColor: '#171717'
    },
    goButtonText:{
      color: 'white',
      fontFamily: 'press-start-2p',
      fontSize: 16,  
    },
    goButtonBorder:{
        borderColor: '#35315C',
        borderWidth: 3,
        borderRadius: 10
    },
    lessonProgression:{ 
        width: 100,
        height: 100,
        marginTop: 140,
        marginBottom: 50,
    },
    previousBtn:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 7
    },
    NextBtn:{
        flexDirection: 'row-reverse',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 7
    }
})