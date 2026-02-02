import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { grey, lightPurple, purple, darkGrey, boxShadowColor, commonFontColor } from '../src/styles/colors'
import fontStyle from '../src/styles/fontStyles'
import { useRouter } from 'expo-router'
import { inputStyles } from '../src/styles/inputStyle'
import { supabase } from '../lib/supabase'


const signUp = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                    .insert({ id: data.user.id, level: 1 });
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
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>

                <Text style={[fontStyle.header1, { margin: 20, alignSelf: 'center', color: commonFontColor }]}>Sign Up</Text>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 40 }}>
                    <Text style={[fontStyle.header2, { color: commonFontColor }]}>Already a memeber?</Text>
                    <Pressable onPress={() => router.dismissTo('/signIn')}>
                        <Text style={[fontStyle.header2, { color: lightPurple }]}> Login</Text>
                    </Pressable>
                </View>

                {/* email input box */}

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

                <View style={inputStyles.inputBox}>
                    <Text style={[styles.text, { opacity: 0.5 }]}>Confirm Password </Text>
                    <TextInput style={inputStyles.inputText} maxLength={20}
                        onChangeText={setConfirmPassword} secureTextEntry={true} autoCapitalize='none' />
                </View>

                <TouchableOpacity style={styles.signUpButton} onPress={() => checkingPassword(password, confirmPassword)}>
                    <Text style={styles.signUpText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default signUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: grey,
    },
    text: {
        padding: 15,
        paddingTop: 15,
        color: '#999',
        fontFamily: 'press-start-2p',
        fontSize: 9,
    },
    main: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    },
    signUpButton: {
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
    signUpText: {
        color: 'white',
        fontFamily: 'press-start-2p',
        fontSize: 9,
    }
})