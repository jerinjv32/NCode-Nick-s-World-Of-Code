import { Tabs, useRouter } from "expo-router";
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { commonFontColor, headerFooter } from "../../src/styles/colors";
import { TouchableOpacity } from "react-native";
import UserProfileIcon from "../../assets/svg/UserProfileIcon";

export default function TabLayout() {
    const router = useRouter()
    const [fontsLoaded] = useFonts({
        'press-start-2p': require('../../assets/fonts/PressStart2P-Regular.ttf')
    })
    if(!fontsLoaded){return(null)}
    return(
        <SafeAreaProvider>
            <Tabs screenOptions={{
                headerRight: () => (
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => router.push('/userProfile')}>
                            <UserProfileIcon width={50} height={50}/>
                    </TouchableOpacity>
                ),
                headerShown: true,
                tabBarStyle:{
                    backgroundColor: headerFooter,
                    borderColor: headerFooter,
                },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: headerFooter,
                },
                headerTitleStyle:{
                    color: commonFontColor,
                    fontFamily: 'press-start-2p',
                    fontSize: 10,
                },
            }}>
                <Tabs.Screen name="home" options={{title: 'Problem Trail'}}/>
                <Tabs.Screen name="chatBot" options={{title: 'Chat Bot'}}/>
                <Tabs.Screen name="codeEditor" options={{title: 'Code Editor'}}/>
                <Tabs.Screen name="collabCoding" options={{title: 'Collab Coding'}}/>
            </Tabs>
        </SafeAreaProvider>
    )
}