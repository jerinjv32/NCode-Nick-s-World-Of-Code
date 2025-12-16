import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{
        height: 58,
        width: 375,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text:{
        color: 'white',
        fontSize: 10,
        fontFamily: 'press-start-2p'
    },
    bg:{
        backgroundColor: '#212020',
        width: 144,
        height: 58,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#35315C',
        elevation: 5,
    }
})