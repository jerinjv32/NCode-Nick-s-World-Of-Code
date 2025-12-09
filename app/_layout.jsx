import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font'

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'press-start-2p': require('../assets/fonts/PressStart2P-Regular.ttf')
    })
    
    if(!fontsLoaded){return(null)}
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ 
        headerShown: false,
        animation: "none" // Remove jitter
      }} />
    </SafeAreaProvider>
  );
}