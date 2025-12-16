import { StyleSheet, View, Text } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native'

const Title = () => {  
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/images/background.png')} resizeMode='cover'>
            <View style={[styles.button, styles.shadow]}>
              <Text style={styles.title} onPress={()=>{router.replace('/home')}}><Text style={{color: '#6760AB'}}>N</Text>CODE</Text>
          </View>
        </ImageBackground>
    </SafeAreaView>
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
    button:{
      borderWidth: 3,
      borderColor: '#35315C',
      paddingTop: 30,
      paddingHorizontal: 20,
      borderRadius: 10,
      backgroundColor: '#212020',
    },
    shadow:{
      shadowColor: '#171717',
      elevation: 5
    }
})