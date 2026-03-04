import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { darkGrey, mainBgColor, purple } from '../../src/styles/colors'
import axios from 'axios'
import useCodeStore from '../../src/store/codeStore'
import DisplayOutput from '../../src/components/DisplayOutput'
import useModalVisible from '../../src/store/modalStore'
import Output from '../../src/components/Output'
import Run from '../../src/components/Run'
import TestBtn from '../../src/components/Test'
import { router } from 'expo-router'
import useLevelDisplay from '../../src/store/levelDisplayStore'
import address from '../../src/config/env'

const codeEditor = () => {
  // const [language, setLang] = useState(null); choosing language will be done in the future
  const code = useCodeStore(state => state.code);
  const setCode = useCodeStore(state => state.setCode);
  const output = useCodeStore(state => state.output);
  const setOutput = useCodeStore(state => state.setOutput);

  const lessonNo = useLevelDisplay(state => state.lesson);
  const openModal = useModalVisible(state => state.openModal);

  async function compile(program: string) {
    try {
      const response = await axios.post('http://' + address + ':3000/execute', {
        "code": program
      });
      console.log('output', response.data)
      setOutput(response.data);
    } catch (error) {
      console.error("Compiler Error:", error);
    }
  }
  async function validator(output: string) {
    try {
      const response = await axios.post('http://10.94.238.219:8004/validator', {
        'lesson': lessonNo,
        'output': output
      });
      console.log(response.data)
    }
    catch (e) {
      console.error("Error:", e);
    }
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: darkGrey }}>
      <DisplayOutput output={output} />
      <View style={styles.tab}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => openModal('outputModal')}>
          <Output />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => { validator(output) }}>
          <TestBtn />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => { openModal('outputModal'), compile(code); }}>
          <Run />
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
    </SafeAreaView>
  )
}

export default codeEditor

const styles = StyleSheet.create({
  tab: {
    backgroundColor: mainBgColor,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomColor: mainBgColor,
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
