import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import { Dropdown } from 'react-native-element-dropdown'
import { useState } from 'react'
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';


const lang = [
    {
        label: 'python',
        value: '1'
    },
    {
        label: 'JavaScript',
        value: '2'
    },
    {
        label: 'C',
        value: '3'
    }
]
const codeEditor = () => {
     const [value, setValue] = useState(null);
    return (
        <SafeAreaView style={{backgroundColor: '#2f2f2f', flex: 1}}>
            <Header/>
            <View style={styles.tab}>
                <Dropdown 
                data={lang}
                style={{width: 170, 
                    backgroundColor: '#212020', 
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderWidth: 3,
                    borderColor: '#35315C',
                    borderRadius: 10,
                    elevation: 5
                }}
                containerStyle={{
                    backgroundColor: '#35315C',
                    borderWidth: 3,
                    borderColor: '#35315C',
                    borderRadius: 10,
                    elevation: 5
                }}
                itemTextStyle={{
                    color: 'white',
                    fontSize: 10,
                }}
                selectedTextStyle={{
                    fontSize: 10,
                    color: 'white',
                }}
                activeColor='#2c2848ff'
                placeholderStyle={{
                    fontSize: 10, 
                    color: 'white'
                }}
                valueField={'value'}
                labelField={'label'}                
                fontFamily='press-start-2p'
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                >
                </Dropdown>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.runBtn}>RUN</Text>
                </TouchableOpacity>
            </View>
            <CodeEditor
                style={{
                    fontSize: 20,
                    inputLineHeight: 26,
                    highlighterLineHeight: 26,
                    color: 'white',
                }}
                language="python"
                syntaxStyle={CodeEditorSyntaxStyles.dracula}
                showLineNumbers
            />
        </SafeAreaView>
    )
}

export default codeEditor

const styles = StyleSheet.create({
    runBtn:{
        color: 'white',
        backgroundColor: '#6760AB',
        fontSize: 10,
        fontFamily: 'press-start-2p',
        elevation: 5,
        padding: 8,
        width: 85,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: '#6760AB',
        marginLeft: 10,
        marginRight: 10,
    },
    tab:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
        borderBottomColor: '#212020',
        borderBottomWidth: 1,
        paddingBottom: 10,
    }
})