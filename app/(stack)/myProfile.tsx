import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, grey } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { supabase } from '../../lib/supabase'

interface User {
    displayName?: string;
    level?: string;
}

interface MyCallback {
    (username: string): void,
}


const myProfile = () => {
    const [profile, setProfile] = useState<User>({
        displayName: null,
        level: null,
    });

    useEffect(() => {
        fetch_user(fetch_username);
        async function fetch_user(callback: MyCallback) {
            const { data } = await supabase.auth.getUser();
            callback(data.user.id);
        }

        async function fetch_username(userId: string) {
            const { data, error } = await supabase
                .from('profile')
                .select('display_name , level')
                .eq('id', userId)
                .single();

            if (error) {
                Alert.alert("error" + error);
            }

            setProfile({
                displayName: data.display_name,
                level: data.level,
            })
        }
    }, []);
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: grey }}>
            <Text style={[fontStyle.normal, { color: commonFontColor }]}>
                Username: {profile.displayName}
            </Text>
            <Text style={[fontStyle.normal, { color: commonFontColor }]}>
                Level: {profile.level}
            </Text>
        </SafeAreaView>
    )
}

export default myProfile

const styles = StyleSheet.create({})