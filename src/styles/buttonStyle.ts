import { StyleSheet } from 'react-native';
import { purple,  lightPurple, boxShadowColor} from '../styles/colors';

const buttonStyle = StyleSheet.create({
    longBtn: {
        marginVertical: 20,
        borderWidth: 3,
        borderColor: purple,
        backgroundColor: lightPurple,
        shadowColor: boxShadowColor,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderBottomWidth: 7,
    },
})

export default buttonStyle;