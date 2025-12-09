import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.headerTitleBox}>
            <Text style={styles.headerTitle}>Problem Trail</Text>
        </View>
        <View style={styles.profileBox}>
            <View style={styles.profile}></View>
        </View>
    </View>
  )
}

export default header

const styles = StyleSheet.create({
     header:{
        flexDirection: 'row',
        backgroundColor: '#282828',
        height: 65,
    },
    headerTitleBox:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
    },
    headerTitle:{
        fontSize: 10,
        fontFamily: 'press-start-2p',
        color: 'white'        
    },
    profileBox:{
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 10,
    },
    profile:{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#35315C',
        borderRadius: 50,
    }
})