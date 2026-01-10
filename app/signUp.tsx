import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { grey, lightPurple, purple, darkGrey, boxShadowColor } from '../src/styles/colors'
import fontStyle from '../src/styles/fontStyles'
import { useRouter } from 'expo-router'
import { inputStyles } from '../src/styles/inputStyle'
import { supabase } from '../lib/supabase'


const signUp = () => {
    const router =  useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUpWithEmail(){
        const {error} = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if(error) {
            Alert.alert(error.message);
        }
        else{
            Alert.alert("Check Your Email");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={[fontStyle.header1, { margin: 20, alignSelf: 'center'}]}>Sign Up</Text>
                <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 40}}>
                    <Text style={fontStyle.header2}>Already a memeber?</Text>
                    <Pressable onPress={() => router.dismissTo('/')}>
                        <Text style={[fontStyle.header2,{color: lightPurple}]}> Login</Text>
                    </Pressable>
                </View>
                <View style={[inputStyles.inputBox]}>
                    <Text style={[fontStyle.normal,{color: '#999'}]}>Email</Text>
                    <TextInput style={inputStyles.inputText} maxLength={80} onChangeText={setEmail}/>
                </View>
                <View style={[inputStyles.inputBox]}>
                    <Text style={[fontStyle.normal,{color: '#999'}]}>Password</Text>
                    <TextInput style={inputStyles.inputText} maxLength={20} onChangeText={setPassword}/>
                </View>
                <TouchableOpacity style={styles.signUpButton} onPress={() => signUpWithEmail()}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}

export default signUp;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: grey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main:{
        flex: 1,
        width: '85%',
    },
    signUpButton:{
        borderWidth: 3,
        borderColor: purple,
        backgroundColor: purple,
        shadowColor: boxShadowColor,
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    signUpText: {
        color: 'white',
        fontFamily: 'press-start-2p',
        fontSize: 9,
    }
})