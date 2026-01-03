import { Stack } from "expo-router";
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AuthRootLayout(){
        const [fontsLoaded] = useFonts({
        'press-start-2p': require('../../assets/fonts/PressStart2P-Regular.ttf')
    })
    if(!fontsLoaded){return(null)}
    return(
        <SafeAreaProvider>
            <Stack screenOptions={{headerShown: false}}/>
        </SafeAreaProvider>
    )
}