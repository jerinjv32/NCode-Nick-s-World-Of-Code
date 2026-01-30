import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { commonFontColor, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import axios from 'axios'
import useCodeStore from '../../src/store/codeStore'

const codeEditor = () => {
    // const [language, setLang] = useState(null); choosing language will be done in the future 
    const code = useCodeStore(state => state.code);
    const setCode = useCodeStore(state => state.setCode);
    const output = useCodeStore(state => state.output);
    const setOutput = useCodeStore(state => state.setOutput);

    const [displayOutput, setDisplayOutput] = useState<"none" | "flex">("none");
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
                <TouchableOpacity activeOpacity={0.5} onPress={() => setDisplayOutput('flex')}>
                    <Text style={styles.runBtn}>OUTPUT</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => { setDisplayOutput('flex'), compile(code); }}>
                    <Text style={styles.runBtn}>RUN</Text>
                </TouchableOpacity>
            </View>
            <View>
                {/* This shit on this line is temporary */}
                <TextInput
                    value={code}
                    multiline={true}
                    style={{ color: 'white', fontFamily: 'GoogleSansCode-Regular' }}
                    placeholder='Start Typing Here...'
                    placeholderTextColor={'#999'}
                    autoCapitalize='none'
                    onChangeText={setCode}
                />
            </View>
            <View style={[styles.outputScreen, { display: displayOutput }]}>
                <Pressable onPress={() => setDisplayOutput('none')}>
                    <Text style={{
                        backgroundColor: purple,
                        color: commonFontColor,
                        textAlign: 'right',
                        paddingRight: 4,
                        paddingBottom: 4,
                    }}>Close</Text>
                </Pressable>
                <ScrollView style={styles.output}>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'GoogleSansCode-Regular',
                        padding: 10,
                    }}>
                        {output}
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
        maxHeight: 353,
    },
    outputScreen: {
        borderWidth: 5,
        borderColor: purple,
        borderRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        width: '97%',
        top: 360,
        minHeight: 400,
        maxHeight: 400,
        backgroundColor: 'black'
    }
})