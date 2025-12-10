import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{
        height: 58,
        width: 375,
        marginTop: 13,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text:{
        marginHorizontal: 10,
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