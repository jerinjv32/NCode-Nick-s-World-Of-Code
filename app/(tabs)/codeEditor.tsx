import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown'
import { useState } from 'react'
import { commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import axios from 'axios'

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
    // const [language, setLang] = useState(null); choosing language will be done in the future 
    const [value, setValue] = useState(null);
    const [text, setText] = useState("");
    const [displayOutput, setDisplayOutput] = useState<"none" | "flex">("none");
    const [compiledOutput, setOutput] = useState('Loading...');
    async function compile(program: string) {
        try {
            const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
                "language": "python",
                "version": "3.10.0",
                "files": [
                    {
                        "content": program
                    }
                ],
            });
            setOutput(response.data.run.output);
        } catch (error) {
            console.error("Compiler Error:", error);
        }
    }
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: mainBgColor }}>
            <View style={styles.tab}>
                <Dropdown
                    data={lang}
                    style={{
                        width: 170,
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
                <TouchableOpacity activeOpacity={0.5} onPress={() => { setDisplayOutput('flex'), compile(text); }}>
                    <Text style={styles.runBtn}>RUN</Text>
                </TouchableOpacity>
            </View>
            <View>
                {/* This shit on this line is temporary */}
                <TextInput multiline={true} style={{ color: 'white', fontFamily: 'GoogleSansCode-Regular' }}
                    placeholder='Start Typing Here...'
                    placeholderTextColor={'#999'}
                    autoCapitalize='none'
                    onChangeText={setText}
                />
            </View>
            <View style={[styles.outputScreen, { display: displayOutput }]}>
                <Pressable onPress={() => setDisplayOutput('none')}>
                    <Text style={{
                        backgroundColor: purple,
                        color: commonFontColor,
                        textAlign: 'right',
                        paddingBottom: 4,
                        paddingRight: 4,
                    }}>Close</Text>
                </Pressable>
                <ScrollView style={styles.output}>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'GoogleSansCode-Regular',
                        padding: 10,
                    }}>
                        {compiledOutput}
                        This the language: {value}
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default codeEditor

const styles = StyleSheet.create({
    runBtn: {
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
    tab: {
        backgroundColor: grey,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 10,
        borderBottomColor: grey,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    codeContainer: {
        padding: 16,
        minWidth: '100%'
    },
    text: {
        fontSize: 16,
    },
    output: {
        backgroundColor: 'black',
    },
    outputScreen: {
        borderWidth: 5,
        borderColor: purple,
        borderRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        width: '97%',
        top: 400,
        minHeight: 345,
        maxHeight: 345,
    }
})