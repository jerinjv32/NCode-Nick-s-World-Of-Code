import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Link } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Title = () => {
  const [fontsLoaded] = useFonts({
    'press-start-2p': require('../assets/fonts/PressStart2P-Regular.ttf')
  })

 if(!fontsLoaded){
    return null
  }  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
         <Text style={styles.title}><Text style={{color: '#35315C'}}>N</Text>CODE</Text>
         <Link href={'/home'}><Text style={{color: 'white'}}>Home Page</Text></Link>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Title

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2F2F2F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontFamily: 'press-start-2p',
        fontSize: 60,
        color: 'white', 
    },
})