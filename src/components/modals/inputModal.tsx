import { StyleSheet, View, Text, Modal, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import useModalVisible from "../../store/modalStore";
import fontStyle from "../../styles/fontStyles";
import { clear, commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple, terminalColor, transparent } from "../../styles/colors";
import { Platform } from "react-native";

const InputModal = () => {
  const aciveModal = useModalVisible(state => state.activeModal)
  const closeModal = useModalVisible(state => state.closeModal)

  return (
    <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : 0}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={aciveModal == 'InputModal' ? true : false}
        onRequestClose={() => closeModal()}
      >
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: transparent }} />
        </TouchableWithoutFeedback>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
            <Text style={[fontStyle.normal, { color: commonFontColor }]}>Enter your input:</Text>
            <TextInput style={styles.inputBox} />
            <TouchableOpacity style={styles.runBtn}>
              <Text style={[fontStyle.header2, { color: commonFontColor }]}>RUN</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </KeyboardAvoidingView>
  );
}

export default InputModal

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: darkGrey,
    width: '90%',
    height: 160,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: grey
  },
  inputBox: {
    width: '100%',
    height: 50,
    marginTop: 10,
    backgroundColor: terminalColor,
    borderWidth: 3,
    borderRadius: 7,
    borderColor: terminalColor
  },
  runBtn: {
    alignSelf: 'flex-end',
    height: 50,
    marginTop: 15,
    width: 100,
    backgroundColor: purple,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: lightPurple,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
