import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { ImageBackground } from 'react-native'

const CollabCoding = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#2F2F2F'}}>
        <Header/>
        <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.background}>
          {/* Welcome Text */}
          <Text style={[styles.text, {marginTop : 10, marginBottom: 20}]}>!{'\n\n'}
            Welcome to collab coding.{'\n'}Here you can work on the same{'\n'}code base with your friends.</Text>
          {/* Welcoem text ends here */}

          {/* Entering key */}
          <Text style={[styles.text, {textAlign: 'center'}]}>Enter the key shared by{'\n'}your friend</Text>

          <View style={styles.keyInput}>
            <TextInput maxLength={6} placeholder='______' placeholderTextColor={'#999'} 
            style={[styles.inputText,{textAlign: 'center'}]}/>
          </View>
          {/* Entering ends here */}

          {/* Join Button */}
          <TouchableOpacity>
            <Text style={styles.joinBtn}>JOIN</Text>
          </TouchableOpacity>
          {/* Join button ends here */}

          {/* Dashed line*/}
          <View style={styles.lineBreak}/>
          {/* Dashed line */}

          {/* Generate room button */}
          <Text style={[styles.text, {marginTop: 30, textAlign: 'center'}]}>Or, generate a room and{'\n'}share the generated key </Text>
          <TouchableOpacity style={{backgroundColor: 'transparent'}}>
              <Text style={[styles.text, styles.button]}>Generate Room</Text>
          </TouchableOpacity>
          {/* Generate room button ends here */}


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
        justifyContent: 'flex-start',
    },
    text:{
      color: 'white',
      fontSize: 12,
      fontFamily: 'press-start-2p',
      padding: 10,
      lineHeight: 20
    },
    button:{
      backgroundColor: '#212020',
      borderColor: '#35315C',
      borderWidth: 3,
      borderRadius: 10,
      paddingHorizontal: 50,
      paddingVertical: 20,
      elevation: 5,
      margin: 40 
    },
    lineBreak:{
      borderColor: 'white',
      borderWidth: 3,
      height: 1,
      width: '90%',
      borderStyle: 'dashed',
    },
    keyInput:{
      backgroundColor: '#212020',
      borderColor: '#35315C',
      borderWidth: 3,
      borderRadius: 10,
      width: 235,
      height: 60,
      marginBottom: 20,
      elevation: 5
    },
    inputText:{
      fontSize: 20,
      color: 'white',
      letterSpacing: 10
    },
    joinBtn:{
      color:'white', 
      backgroundColor: '#35315C',
      fontFamily: 'press-start-2p',
      paddingTop: 20,
      paddingBottom: 10,
      paddingHorizontal: 20,
      marginBottom: 40,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#35315C',
      elevation: 5,
    }
})