import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

const Home = () => {
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

export default Home

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})