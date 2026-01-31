import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, darkGrey, grey, mainBgColor, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { supabase } from '../../lib/supabase'
import ProgressBar from '../../assets/svg/ProgressBar'
import Svg, { Circle, ClipPath, Defs, Image } from 'react-native-svg';

interface User {
    displayName?: string;
    level?: string;
}

interface MyCallback {
    (username: string): void,
}

const cx = 160;
const cy = 160;
const radius = 143;

const myProfile = () => {
    const [progress, setProgress] = useState(0)
    const [profile, setProfile] = useState<User>({
        displayName: '',
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
            });
        }
    }, []);
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: mainBgColor }}>
            <View>
                <Svg width="45%" height="45%" viewBox='0 0 320 320' style={profileStyle.haloPosition}>
                    <Defs>
                        <ClipPath id='profile'>
                            <Circle cx={cx} cy={cy} r={radius} />
                        </ClipPath>
                    </Defs>
                    <Circle cx={cx} cy={cy} r={radius} fill={'white'} />
                    <Image y={40} href={require('../../assets/icons/user_profile.png')} clipPath='url(#profile)' />
                    <Circle cx={cx} cy={cy} r={radius} fill={'none'} stroke={darkGrey} strokeWidth={10} />
                </Svg>
                <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
                    <Text style={[fontStyle.header1, { color: commonFontColor }]}>
                        {profile.displayName}
                    </Text>
                    <Text style={[fontStyle.normal, { color: '#999', padding: 10 }]}>
                        Level: {profile.level}
                    </Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={[styles.progressMotive, fontStyle.normal]}>Total Progress:</Text>
                        <ProgressBar progress={progress} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default myProfile

const styles = StyleSheet.create({
    progressMotive: {
        color: commonFontColor,
        fontSize: 9,
        paddingBottom: 10,
        marginLeft: 4
    },
})

const profileStyle = StyleSheet.create(
    {
        haloPosition: {
            marginTop: 43,
            alignSelf: 'center'
        }
    }
);