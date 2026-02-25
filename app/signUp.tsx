import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { grey, lightPurple, purple, darkGrey, boxShadowColor, commonFontColor } from '../src/styles/colors'
import fontStyle from '../src/styles/fontStyles'
import { useRouter } from 'expo-router'
import { inputStyles } from '../src/styles/inputStyle'
import { supabase } from '../lib/supabase'
import { Platform } from 'react-native'

const signUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function signUpWithEmail() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      Alert.alert(error.message);
    }
    else {
      if (data.user) {
        const { error } = await supabase
          .from('users_profile')
          .insert({ id: data.user.id, display_name: username, level: 1, });
        Alert.alert("Your account is succefully created.");
        router.back();
        if (error) {
          console.log('error:', error);
        }
      }
    }
  }
  function checkingPassword(firstPass: string, secondPass: string) {
    if (firstPass === secondPass) {
      signUpWithEmail();
    }
    else {
      Alert.alert("Passwords are not matching")
    }
  }
  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
      <KeyboardAvoidingView
        behavior='height'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <View style={styles.main}>
          <Text style={[fontStyle.header1, { marginBottom: 20, alignSelf: 'center', color: commonFontColor }]}>Sign Up</Text>

          {/* username */}
          <TextInput
            style={[inputStyles.inputText, inputStyles.inputBox]}
            maxLength={80}
            placeholderTextColor={'#999'}
            onChangeText={setUsername}
            autoCapitalize='none'
            placeholder='Username'
            inputMode='text'
          />
          {/* email input box */}
          <TextInput
            style={[inputStyles.inputText, inputStyles.inputBox]}
            maxLength={80}
            placeholderTextColor={'#999'}
            onChangeText={setEmail}
            autoCapitalize='none'
            placeholder='Email'
            inputMode='email'
          />
          {/* password */}
          <TextInput
            style={[inputStyles.inputText, inputStyles.inputBox]}
            maxLength={80}
            placeholderTextColor={'#999'}
            onChangeText={setPassword}
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder='Password'
          />

          {/* Confirm Password */}
          <TextInput
            style={[inputStyles.inputText, inputStyles.inputBox]}
            maxLength={80}
            placeholderTextColor={'#999'}
            onChangeText={setConfirmPassword}
            autoCapitalize='none'
            placeholder='Confirm Password'
          />
          <TouchableOpacity style={styles.signUpButton} onPress={() => checkingPassword(password, confirmPassword)}>
            <Text style={styles.signUpText}>Confirm</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 14 }}>
            <Text style={[fontStyle.header2, { color: commonFontColor }]}>Already a memeber?</Text>
            <Pressable onPress={() => router.dismissTo('/signIn')}>
              <Text style={[fontStyle.header2, { color: lightPurple }]}> Login</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grey,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  signUpButton: {
    marginVertical: 20,
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
  signUpText: {
    color: 'white',
    fontFamily: 'press-start-2p',
    fontSize: 9,
  }
})
