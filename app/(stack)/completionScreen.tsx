import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonFontColor, mainBgColor } from '../../src/styles/colors';
import fontStyle from '../../src/styles/fontStyles';
import buttonStyle from '../../src/styles/buttonStyle';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { supabase } from '../../lib/supabase'
import ActualAlert from '../../src/components/ActualAlert';

interface MyCallBack {
    (userId: string): void
}
const completionScreen = () => {
    const router = useRouter();
        useEffect(() => {
        async function getUserId(callBack: MyCallBack) {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.log('error:', error);
            }
            else {
                callBack(data.user.id);
            }
        }

        async function updateCurrentLesson(userId: string) {
            const { error } = await supabase
                .rpc('increment_lesson', {p_user_id: userId});
                
            if(error) {
                console.log('error:', error);
            }
            else{
                console.log("Check the table")
            }
        }
        getUserId(updateCurrentLesson);
    }, [])
    return (
        <SafeAreaView edges={['bottom', 'top']} style={{ flex: 1, backgroundColor: mainBgColor }}>
            <View style={styles.container}>
                <Text style={[fontStyle.header2, { color: commonFontColor }]}>Lesson Completed</Text>
                <TouchableOpacity
                    style={buttonStyle.longBtn}
                    onPress={() => {
                        router.dismissAll();
                        router.replace('/home');
                    }}

                >
                    <Text style={[fontStyle.header2, { color: commonFontColor }]}>continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default completionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})