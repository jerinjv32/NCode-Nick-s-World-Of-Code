import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { commonFontColor, darkGrey, grey, lightPurple, purple } from '../styles/colors'
import fontStyle from '../styles/fontStyles'
const TestBtn = () => {
    return (
        <View style={styles.container}>
            <View style={styles.outputBtn}>
                <Text style={[fontStyle.header2, { color: commonFontColor }]}>Test</Text>
            </View>
        </View>
    )
}

export default TestBtn

const styles = StyleSheet.create({
    outputBtn: {
        backgroundColor: darkGrey,
        elevation: 5,
        textAlign: 'center',
        borderRadius: 15,
        borderColor: purple,
        borderWidth: 3,
        width: 90,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 100,
        borderRadius: 18,
        borderColor: grey,
        borderWidth: 3
    }
})