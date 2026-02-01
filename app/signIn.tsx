import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Alert, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { grey, darkGrey, purple, boxShadowColor, lightPurple } from '../src/styles/colors'
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { UseAuthStore } from '../src/store/authStore'
import { inputStyles } from '../src/styles/inputStyle'
import { Redirect, useRouter } from 'expo-router'
import AppLogo from '../assets/svg/Logo'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = UseAuthStore();
  const router = useRouter();
  const isLogged = UseAuthStore(state => state.loggedIn)

  if (isLogged) {
    return <Redirect href="/home" />
  }

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
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
    <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>

        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <AppLogo />
          {/* logo */}

          {/* username */}
          <View style={inputStyles.inputBox} >
            <Text style={[styles.text, { opacity: 0.5 }]}>Email</Text>
            <TextInput inputMode='email' style={inputStyles.inputText} maxLength={80}
              onChangeText={setEmail} autoCapitalize='none' />
          </View>

          {/* password */}
          <View style={inputStyles.inputBox}>
            <Text style={[styles.text, { opacity: 0.5 }]}>Password </Text>
            <TextInput style={inputStyles.inputText} maxLength={20}
              onChangeText={setPassword} secureTextEntry={true} autoCapitalize='none' />
          </View>

          <Text style={[styles.text, { alignSelf: 'flex-end', marginRight: '6%' }]}>Forgot Password?</Text>

          {/* sign in button */}
          <TouchableOpacity style={styles.signInBtn} onPress={() => signInWithEmail()}>
            <Text style={styles.signIntext}>Sign In</Text>
          </TouchableOpacity>

          <Pressable onPress={() => router.push('/signUp')}>
            <Text style={[styles.text, { textAlign: 'center' }]}>New? Sign Up</Text>
          </Pressable>

        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    backgroundColor: grey,
    flex: 1,
  },
  text: {
    padding: 15,
    paddingTop: 15,
    color: '#999',
    fontFamily: 'press-start-2p',
    fontSize: 9,
  },
  signInBtn: {
    marginVertical: 14,
    borderWidth: 3,
    borderColor: purple,
    backgroundColor: lightPurple,
    shadowColor: boxShadowColor,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 7,
  },
  signIntext: {
    color: 'white',
    fontFamily: 'press-start-2p',
    fontSize: 9,
  }
})