import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { commonFontColor, darkGrey, grey, lightPurple, purple } from '../styles/colors'
import fontStyle from '../styles/fontStyles'
const Output = () => {
    return (
        <View style={styles.container}>
            <View style={styles.outputBtn}>
                <Text style={[fontStyle.header2, {color: commonFontColor}]}>OUTPUT</Text>
            </View>
        </View>
    )
}

export default Output

const styles = StyleSheet.create({
    outputBtn: {
        backgroundColor: darkGrey,
        elevation: 5,
        textAlign: 'center',
        borderRadius: 15,
        borderColor: purple,
        marginHorizontal: 10,
        borderWidth: 3,
        width: 90,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 100,
        borderRadius: 18,
        borderColor: grey,
        borderWidth: 3
    }
})