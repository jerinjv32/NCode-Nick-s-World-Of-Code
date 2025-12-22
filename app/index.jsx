import { StyleSheet, View, Text, Touchable, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { grey, darkGrey, purple, boxShadowColor } from '../src/styles/colors'

const Title = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <View>
          {/* logo */}
          <View style={[styles.button, styles.shadow]}>
            <Text style={styles.title}><Text style={{ color: '#6760AB', }}>N</Text>CODE</Text>
          </View>
          {/* username */}
          <View style={styles.inputBox} >
            <Text style={[styles.text, {opacity: 0.5}]}>
              Username
            </Text>
            <TextInput style={styles.text} maxLength={20}></TextInput>
          </View>
          {/* password */}
          <View style={styles.inputBox}>
            <Text style={[styles.text, {opacity: 0.5}]}>
              password
            </Text>
            <TextInput style={styles.text} maxLength={20}></TextInput>
          </View>
          <Text style={[styles.text, { textAlign: 'right' }]}>
            Forgot Password?
          </Text>
          {/* sign in button */}
          <TouchableOpacity onPress={() => router.push('/home')} style={styles.signIntextBox}>
              <Text style={styles.signIntext}>Sign In</Text>
          </TouchableOpacity>
          <Text style={[styles.text, { marginTop: 20, textAlign: 'center' }]}>
            New? Sign Up
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Title

const styles = StyleSheet.create({
  container: {
    backgroundColor: grey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'press-start-2p',
    fontSize: 60,
    color: 'white',
  },
  button: {
    borderWidth: 3,
    borderColor: purple,
    paddingTop: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: darkGrey,
purpleom: 80,
  },
  shadow: {
    shadowColor: boxShadowColor,
    elevation: 5
  },
  inputBox: {
    backgroundColor: darkGrey,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    shadowColor: boxShadowColor,
    justifyContent: 'flex-start',
  },
  text: {
    color: '#999',
    fontFamily: 'press-start-2p',
    fontSize: 9,
    padding: 10,
  },
  signIntextBox:{
    borderWidth: 3,
    borderColor: purple,
    backgroundColor: purple,
    shadowColor: boxShadowColor,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signIntext: {
    color: 'white',
    fontFamily: 'press-start-2p',
    fontSize: 9,
  }
})