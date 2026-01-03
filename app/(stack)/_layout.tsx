import { Stack, useRouter } from "expo-router";
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { commonFontColor, headerFooter } from "../../src/styles/colors";
import { TouchableOpacity } from "react-native";
import BackArrow from "../../assets/svg/arrow";

export default function ProfileRootLayout(){
        const [fontsLoaded] = useFonts({
        'press-start-2p': require('../../assets/fonts/PressStart2P-Regular.ttf')
    })
    if(!fontsLoaded){return(null)}
    const router = useRouter();
    return(
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="userProfile" options={{
                    title: 'Profile',
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor: headerFooter,
                    },
                    headerTitleStyle:{
                        color: commonFontColor,
                        fontSize: 10,
                        fontFamily: 'press-start-2p'
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.replace('/home')}>
                            <BackArrow width={50} height={50}/>
                        </TouchableOpacity>
                    )
                }}/>
            </Stack>
        </SafeAreaProvider>
    )
}