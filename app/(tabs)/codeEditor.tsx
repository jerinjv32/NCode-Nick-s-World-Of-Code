import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { alertRed, commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import axios from 'axios'
import useCodeStoreEditor from '../../src/store/codeStoreEditor'
import DisplayOutput from '../../src/components/DisplayOutput'
import useModalVisible from '../../src/store/modalStore'
import Run from '../../src/components/Run'
import InputModal from '../../src/components/modals/inputModal'
import Output from '../../src/components/Output'
import address from '../../src/config/env'

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
  const code = useCodeStoreEditor(state => state.code);
  const setCode = useCodeStoreEditor(state => state.setCode);
  const output = useCodeStoreEditor(state => state.output);
  const setOutput = useCodeStoreEditor(state => state.setOutput);

  async function compile(program: string) {
    try {
      const response = await axios.post('http://' + address + ':3001/execute', {
        "code": program
      });
      console.log(response.data)
      setOutput(response.data)
    } catch (error) {
      console.error("Compiler Error:", error);
    }
  }
  const openModal = useModalVisible(state => state.openModal);
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: darkGrey }}>
      <InputModal />
      <DisplayOutput output={output} />
      <View style={styles.tab}>
        {/* <Dropdown
                    data={lang}
                    style={{
                        width: '50%',
                        backgroundColor: darkGrey,
                        paddingHorizontal: 5,
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
                </Dropdown> */}
        <TouchableOpacity activeOpacity={0.5} onPress={() => { openModal('outputModal'); }}>
          <Output />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => { openModal('InputModal') }}>
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
          autoCorrect={false}
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
})
