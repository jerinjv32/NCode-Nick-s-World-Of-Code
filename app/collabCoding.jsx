import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { ImageBackground } from 'react-native'


const CollabCoding = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#2F2F2F'}}>
        <Header/>
        <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.background}>
        </ImageBackground>
        <Footer/>
    </SafeAreaView>
  )
}

export default CollabCoding

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})