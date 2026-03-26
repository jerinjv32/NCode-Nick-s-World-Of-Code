import { StyleSheet, View, Text, Modal, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import useModalVisible from "../../store/modalStore";
import fontStyle from "../../styles/fontStyles";
import { clear, commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple, terminalColor, transparent } from "../../styles/colors";
import { Platform } from "react-native";
import { useState } from "react";
import axios from "axios";
import address from "../../config/env";
import useCodeStore from "../../store/codeStore";

const InputModalProblem = () => {
  const code = useCodeStore(state => state.code);
  const setOutput = useCodeStore(state => state.setOutput);

  const aciveModal = useModalVisible(state => state.activeModal)
  const openModal = useModalVisible(state => state.openModal)
  const closeModal = useModalVisible(state => state.closeModal)
  const [onFocus, setFocus] = useState(0)

  const [input, setInput] = useState('')

  async function compile(program: string) {
    try {
      const response = await axios.post('http://' + address + ':3001/execute', {
        "code": program,
        "input": input
      });
      console.log(response.data)
      setOutput(response.data)
    } catch (error) {
      console.error("Compiler Error:", error);
    }
  }

  return (
    <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : 0}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={aciveModal == 'InputModalProblem' ? true : false}
        onRequestClose={() => { setFocus(0), closeModal() }}
      >
        <TouchableWithoutFeedback onPress={() => { closeModal(), setFocus(0) }}>
          <View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: transparent }} />
        </TouchableWithoutFeedback>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
            <Text style={[fontStyle.normal, { color: commonFontColor }]}>Enter your input:</Text>
            <TextInput
              placeholder="If there is no input, then leave this empty..."
              placeholderTextColor={'#999'}
              onFocus={() => setFocus(1)}
              onChangeText={setInput}
              value={input}
              style={[styles.inputBox, { color: commonFontColor, borderColor: onFocus == 1 ? purple : terminalColor }]}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 16 }}>
              <Text style={{ width: '68%', fontSize: 12, color: '#999' }}>For multiple inputs separate the inputs in order with ' , ' sign</Text>
              <TouchableOpacity style={styles.runBtn} onPress={() => { compile(code), closeModal(), openModal('outputModal') }}>
                <Text style={[fontStyle.header2, { color: commonFontColor }]}>RUN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>
    </KeyboardAvoidingView>
  );
}

export default InputModalProblem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: darkGrey,
    width: '90%',
    height: 176,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: grey
  },
  inputBox: {
    width: '100%',
    height: 50,
    marginTop: 15,
    backgroundColor: terminalColor,
    borderWidth: 3,
    borderRadius: 7,
  },
  runBtn: {
    height: 50,
    width: 100,
    backgroundColor: purple,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: lightPurple,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
