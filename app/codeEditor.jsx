import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import { Dropdown } from 'react-native-element-dropdown'
import { useState } from 'react'
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { commonFontColor, darkGrey, grey, lightPurple, purple } from '../src/styles/colors'


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
        <SafeAreaView style={{backgroundColor: grey, flex: 1}}>
            <Header/>
            <View style={styles.tab}>
                <Dropdown 
                data={lang}
                style={{width: 170, 
                    backgroundColor: darkGrey, 
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderWidth: 3,
                    borderColor: purple,
                    borderRadius: 10,
                    elevation: 5
                }}
                containerStyle={{
                    backgroundColor: purple,
                    borderWidth: 3,
                    borderColor: purple,
                    borderRadius: 10,
                    elevation: 5
                }}
                itemTextStyle={{
                    color: commonFontColor,
                    fontSize: 10,
                }}
                selectedTextStyle={{
                    fontSize: 10,
                    color: commonFontColor,
                }}
                activeColor='#2c2848ff'
                placeholderStyle={{
                    fontSize: 10, 
                    color: commonFontColor
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
                    inputLineHeight: 26,
                    highlighterLineHeight: 26,
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
        color: commonFontColor,
        backgroundColor: lightPurple,
        fontSize: 10,
        fontFamily: 'press-start-2p',
        elevation: 5,
        padding: 8,
        width: 85,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: lightPurple,
        marginLeft: 10,
        marginRight: 10,
    },
    tab:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
        borderBottomColor: darkGrey,
        borderBottomWidth: 1,
        paddingBottom: 10,
    }
})