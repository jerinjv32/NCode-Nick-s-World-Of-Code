import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

const CollabCoding = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#2F2F2F',}}>
        <Header/>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
          <ScrollView contentContainerStyle={{flexGrow: 1,alignItems: 'center', justifyContent: 'flex-start'}}
            keyboardShouldPersistTaps="handled">
            <Text style={[styles.text, {marginTop : 50}]}>!{'\n\n'}Welcome to collab coding.{'\n'}
              Here you can work on the same{'\n'}code base with your friends.</Text>
            <Pressable >
              <Text style={[styles.text, styles.button]}>Generate Room</Text>
            </Pressable>
            <View style={styles.lineBreak}/>
            <Text style={[styles.text, {textAlign: 'center'}]}>Enter the key shared by your friend</Text>
            <View style={styles.keyInput}>
              <TextInput maxLength={6} placeholder='Key' placeholderTextColor={'#999'} 
              style={[styles.inputText ,{textAlign: 'center'}]}/>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      <View style={{ position: 'absolute', bottom: 48, left: 0, right: 0 }}>
        <Footer />
      </View>
    </SafeAreaView>
  )
}

export default CollabCoding

const styles = StyleSheet.create({
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
    },
    inputText:{
      fontSize: 20,
    }
})