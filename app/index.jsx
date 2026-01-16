import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Alert, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { grey, darkGrey, purple, boxShadowColor } from '../src/styles/colors'
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { UseAuthStore } from '../src/authStore'
import { inputStyles } from '../src/styles/inputStyle'
import { useRouter } from 'expo-router'

const Title = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = UseAuthStore();
  const router = useRouter();

  async function signInWithEmail() {
    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      Alert.alert(error.message)
    }
    else {
      logIn()
    }
  }
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <View>   
          {/* logo */}
          <View style={[styles.button, styles.shadow]}>
            <Text style={styles.title}><Text style={{ color: '#6760AB', }}>N</Text>CODE</Text>
          </View>
          {/* username */}
          <View style={inputStyles.inputBox} >
            <Text style={[styles.text, {opacity: 0.5}]}>
              Email
            </Text>
            <TextInput inputMode='email' style={inputStyles.inputText} maxLength={80} 
              onChangeText={setEmail} autoCapitalize='none'/>
          </View>
          {/* password */}
          <View style={inputStyles.inputBox}>
            <Text style={[styles.text, {opacity: 0.5}]}>
              password
            </Text>
            <TextInput style={inputStyles.inputText} maxLength={20} 
              onChangeText={setPassword} secureTextEntry={true} autoCapitalize='none'/>
          </View>
          <Text style={[styles.text, { textAlign: 'right' }]}>
            Forgot Password?
          </Text>
          {/* sign in button */}
          <TouchableOpacity style={styles.signIntextBox} onPress={() => signInWithEmail()}>
                <Text style={styles.signIntext}>Sign In</Text>
          </TouchableOpacity>
          <Pressable onPress={() => router.push('/signUp')}>
            <Text style={[styles.text, { marginTop: 20, textAlign: 'center' }]}>
                New? Sign Up
            </Text>
          </Pressable>
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
},
shadow: {
  shadowColor: boxShadowColor,
  elevation: 5
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