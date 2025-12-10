import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'

const codeEditor = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#2f2f2f', flex: 1}}>
            <Header/>
        </SafeAreaView>
    )
}

export default codeEditor

const styles = StyleSheet.create({})