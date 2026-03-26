import { Modal, View, Image, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import useModalVisible from "../../store/modalStore";
import modalStyles from "../../styles/modalStyles";
import { commonFontColor, lightPurple, purple, terminalColor } from "../../styles/colors";
import fontStyle from "../../styles/fontStyles";
import { useRef, useState } from "react";


export default function StoryIntroModal() {

  const count = useRef<number>(0);
  const [sentance, setSentance] = useState('...');

  const scene: { name: string, sentance: string }[] = [
    {
      name: 'nick',
      sentance: 'hello'
    },
    {
      name: 'nick',
      sentance: 'are you ok?'
    }
  ]


  const activeModal = useModalVisible(state => state.activeModal);
  const closeModal = useModalVisible(state => state.closeModal);

  function getPreviousScene() {
    count.current -= 1;
    let obj = scene[count.current]
    setSentance(obj.sentance)
  }

  function getNextScene() {
    let obj = scene[count.current]
    count.current += 1;
    setSentance(obj.sentance)
  }

  return (
    <Modal
      transparent={true}
      visible={activeModal == 'IntroModal' ? true : false}
      onRequestClose={() => closeModal()}
      animationType="fade"
    >
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={modalStyles.overlay} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', margin: 40 }}>
            <View style={styles.imageDisplay}>
              <Image
                source={require('../../../assets/images/nick.png')}
                resizeMode='contain'
                style={{
                  width: 320,
                  height: undefined,
                  aspectRatio: 1,
                }}
              />

            </View>
            <View style={styles.dialogueBox}>
              <Text style={{ color: commonFontColor }}>{sentance}</Text>
            </View>
            <View style={styles.btnsPosition}>
              <TouchableOpacity style={styles.btns} onPress={() => count.current != 0 ? getPreviousScene() : ''}>
                <Text style={[fontStyle.normal, { color: commonFontColor }]}>previous</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btns} onPress={() => count.current != 1 ? getNextScene() : ''}>
                <Text style={[fontStyle.normal, { color: commonFontColor }]}>next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View >
    </Modal >
  );
}

const styles = StyleSheet.create({
  dialogueBox: {
    backgroundColor: terminalColor,
    borderColor: purple,
    borderWidth: 3,
    borderRadius: 10,
    width: 350,
    minHeight: '10%',
    maxHeight: '30%',
    marginBottom: 30,
    padding: 5,
    borderTopWidth: 5,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  btns: {
    backgroundColor: purple,
    borderColor: lightPurple,
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10
  },
  btnsPosition: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '50%'
  },
  imageDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  }
});

