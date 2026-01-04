import { Tabs, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font'
import { commonFontColor, grey, headerFooter, lightPurple, purple } from "../../src/styles/colors";
import { Pressable, TouchableOpacity, Text } from "react-native";
import UserProfileIcon from "../../assets/svg/UserProfileIcon";
import ProblemTrail from "../../assets/svg/ProblemTrail";
import ChatBot from "../../assets/svg/ChatBot";
import CodeEditor from "./codeEditor";

export default function TabLayout() {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        'press-start-2p': require('../../assets/fonts/PressStart2P-Regular.ttf')
    })
    if(!fontsLoaded){return(null)}
    return(
        <SafeAreaProvider style={{backgroundColor: grey}}>
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
                tabBarActiveTintColor: lightPurple,
            }}>
                <Tabs.Screen name="home" options={{
                    title: 'Problem Trail',
                    tabBarIcon: ({color, focused}) => (
                        <ProblemTrail color={color} isFocused={focused} newSize={42} size={40}/>
                    ),
                }}/>
                <Tabs.Screen name="chatBot" options={{
                    title: 'Chat Bot',
                    tabBarIcon: ({color, focused}) => (
                        <ChatBot size={40} color={color} isFocused={focused} newSize={42}/>
                    ),
                }}/>
                <Tabs.Screen name="codeEditor" options={{
                    title: 'Code Editor',
                    tabBarIcon: ({color, focused}) => (
                        <CodeEditor size={40} color={color} isFocused={focused} newSize={42}/>
                    ),    
                }}/>
                <Tabs.Screen name="collabCoding" options={{title: 'Collab Coding'}}/>
            </Tabs>
        </SafeAreaProvider>
    )
}