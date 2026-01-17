import { Stack } from "expo-router";
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { backButtonColor, commonFontColor, headerFooter } from "../../src/styles/colors";
import { grey } from "../../src/styles/colors";

export default function ProfileRootLayout(){
        const [fontsLoaded] = useFonts({
        'press-start-2p': require('../../assets/fonts/PressStart2P-Regular.ttf')
    })
    if(!fontsLoaded){return(null)}
    return(
        <SafeAreaProvider style={{backgroundColor: grey}}>
            <Stack screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: headerFooter,
                },
                headerTitleStyle:{
                    color: commonFontColor,
                    fontFamily: 'press-start-2p',
                    fontSize: 10,
                },
                headerTintColor: backButtonColor
            }}>
                <Stack.Screen name="account" options={{
                    title: 'Account',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor: headerFooter,
                    },
                    headerTitleStyle:{
                        color: commonFontColor,
                        fontSize: 10,
                        fontFamily: 'press-start-2p'
                    },
                    headerBackVisible: true
                }}/>
                <Stack.Screen name="problem_trail" options={{
                    title: "Problem Trail",
                    headerBackVisible: true,   
                }} />
                <Stack.Screen name="myProfile" options={{
                    title: 'My Profile',
                }} />
            </Stack>
        </SafeAreaProvider>
    )
}