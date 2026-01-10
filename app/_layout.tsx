import { Stack, useRouter } from "expo-router";
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UseAuthStore } from "../src/authStore";
import { grey } from "../src/styles/colors";
import { useEffect } from "react";


export default function AuthRootLayout(){
    const isLogged = UseAuthStore(state => state.loggedIn);
    const router = useRouter();
    useEffect(() => {
        if(isLogged) {
            router.replace('/home');
        }
    },[isLogged]);

    console.log(isLogged)
    const [fontsLoaded] = useFonts({
        'press-start-2p': require('../assets/fonts/PressStart2P-Regular.ttf')
    })
    if(!fontsLoaded){
        return(null)
    }
    return(
        <SafeAreaProvider style={{backgroundColor: grey}}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="signUp" options={{headerShown: false}}/>
                <Stack.Protected guard={isLogged}>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Stack.Screen name="(stack)" options={{headerShown: false}}/>
                </Stack.Protected>
            </Stack>
        </SafeAreaProvider>
    )
}