import { StyleSheet, View, Text, Touchable, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

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
          <TouchableOpacity onPress={() => router.push('/home')} >
            <Text style={styles.signIntext}>
              Sign In
            </Text>
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
    backgroundColor: '#2F2F2F',
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
    borderColor: '#35315C',
    paddingTop: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#212020',
    marginBottom: 80,
  },
  shadow: {
    shadowColor: '#171717',
    elevation: 5
  },
  inputBox: {
    backgroundColor: '#212020',
    height: 75,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#171717',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#999',
    fontFamily: 'press-start-2p',
    fontSize: 9,
    padding: 10,
  },
  signIntext: {
    borderWidth: 3,
    borderColor: '#35315C',
    backgroundColor: '#35315C',
    elevation: 10,
    shadowColor: '#171717',
    color: 'white',
    fontFamily: 'press-start-2p',
    fontSize: 9,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 10,
    marginTop: 20,
    borderRadius: 10,
  }
})