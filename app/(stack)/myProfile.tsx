import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, grey } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { supabase } from '../../lib/supabase'

interface User {
    username?: string;
    id?: string;
}

const myProfile = () => {
    const user : User = {}
    async function fetch_user() {
        const { data } = await supabase.auth.getUser();
        user.id = data.user.id;
    }
    async function fetch_username(){
        const { data } = await supabase.from('profile').select().eq('id', user.id);
        console.log("username:"+ data);
    }
    fetch_user();
    fetch_username()
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: grey }}>
            <Text style={[fontStyle.normal, { color: commonFontColor }]}>Username</Text>
            <Text style={[fontStyle.normal, { color: commonFontColor }]}>Level</Text>
            <Text style={[fontStyle.normal, { color: commonFontColor }]}>Exp</Text>
        </SafeAreaView>
    )
}

export default myProfile

const styles = StyleSheet.create({})