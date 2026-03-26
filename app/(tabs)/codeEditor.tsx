import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { alertRed, commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import useCodeStoreEditor from '../../src/store/codeStoreEditor'
import DisplayOutput from '../../src/components/DisplayOutput'
import useModalVisible from '../../src/store/modalStore'
import Run from '../../src/components/Run'
import InputModal from '../../src/components/modals/inputModal'
import Output from '../../src/components/Output'

const codeEditor = () => {
  const code = useCodeStoreEditor(state => state.code);
  const setCode = useCodeStoreEditor(state => state.setCode);
  const output = useCodeStoreEditor(state => state.output);


  const openModal = useModalVisible(state => state.openModal);
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: darkGrey }}>
      <InputModal />
      <DisplayOutput output={output} />
      <View style={styles.tab}>
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
