import { StyleSheet, Text, View } from 'react-native'
import ProblemTrail from '../../assets/svg/ProblemTrail'
import ChatBot from '../../assets/svg/ChatBot'
import CollabCoding from '../../assets/svg/CollabCoding'
import CodeEditor from '../../assets/svg/CodeEditor'
import React from 'react'

const footer = () => {
  return (
    <View style={styles.footer}>
        <View style={styles.box}>
            <View style={styles.iconProperty}><ProblemTrail/></View>
        </View>
        <View style={styles.box}>
            <View style={styles.iconProperty}><ChatBot/></View >
        </View>
        <View style={styles.box}>
            <View style={styles.iconProperty}><CollabCoding/></View>
        </View>
        <View style={styles.box}>
            <View style={styles.iconProperty}><CodeEditor/></View>
        </View>
    </View>
  )
}

export default footer

const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#282828',
        height: 98,
    },
    box:{
        height: 70,
        width: 70,
        backgroundColor: '#212020',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#35315C'
    },
    iconProperty:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})