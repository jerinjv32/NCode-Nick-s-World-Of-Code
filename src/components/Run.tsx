import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { darkGrey, grey, lightPurple, purple } from '../styles/colors'
import NextBtn from '../../assets/svg/Next'

const Run = () => {
    return (
        <View style={{
            borderWidth: 3, borderColor: grey, height: 55,
            width: 55, marginHorizontal: 10,
            borderRadius: 18, flex: 1, justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={styles.runBtn}>
                <NextBtn width={25} height={25} />
            </View>
        </View>
    )
}

export default Run

const styles = StyleSheet.create({
    runBtn: {
        backgroundColor: darkGrey,
        borderRadius: 15,
        borderColor: purple,
        borderWidth: 3,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
})