import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const chatBot = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex:1, backgroundColor: '#2F2F2F'}}>
            <Header/>
            <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.background}>
            </ImageBackground>
            <Footer/>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default chatBot

const styles = StyleSheet.create({})