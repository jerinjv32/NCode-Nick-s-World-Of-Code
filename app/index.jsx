import { useRouter } from 'expo-router'
import { UseAuthStore } from '../src/authStore'
import { StyleSheet, Text, View } from 'react-native'
import { commonFontColor, grey } from '../src/styles/colors'
import fontStyle from '../src/styles/fontStyles'

const Index = () => {
  const isLogged = UseAuthStore(state => state.loggedIn)
  const hasRehydrated = UseAuthStore(state => state._hasHydrated)
  const router = useRouter();

  if (!hasRehydrated) {
      return (
        <View style={styles.container}>
          <Text style={[fontStyle.header1, {color: commonFontColor}]}>Loading...</Text>
        </View>
      )
  } 
  
  if (!isLogged) {
    return router.replace('/signIn')
  }
}

export default Index

const styles = StyleSheet.create({
    container: {
        backgroundColor: grey,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})