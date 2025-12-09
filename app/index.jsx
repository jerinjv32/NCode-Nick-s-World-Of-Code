import { StyleSheet, View, Text } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Title = () => {  
  return (
    <SafeAreaView style={styles.container}>
         <Text style={styles.title}><Text style={{color: '#35315C'}}>N</Text>CODE</Text>
         <Link href={'/home'}><Text style={{color: 'white'}}>Home Page</Text></Link>
    </SafeAreaView>
  )
}

export default Title

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2F2F2F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontFamily: 'press-start-2p',
        fontSize: 60,
        color: 'white', 
    },
})