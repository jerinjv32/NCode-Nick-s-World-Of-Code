import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { commonFontColor, darkGrey, grey, mainBgColor, purple, transparent } from '../../styles/colors'
import fontStyle from '../../styles/fontStyles'
import useModalVisible from '../../store/modalStore'
import modalStyles from '../../styles/modalStyles'

interface RoomType {
  roomId: string;
}
const CCEnteringModal = ({ roomId }: RoomType) => {

  const activeModal = useModalVisible(state => state.activeModal);
  const closeModal = useModalVisible(state => state.closeModal);
  return (
    <Modal
      transparent={true}
      visible={activeModal == 'CCEnteringModal' ? true : false}
      onRequestClose={() => closeModal()}
      animationType='fade'
    >
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={modalStyles.overlay} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={[
              fontStyle.normal, {
                textAlign: 'center',
                lineHeight: 20,
                color: commonFontColor,
                padding: 5
              }
            ]}>
              Join Room {roomId}
            </Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={styles.buttonOuterBorder} >
                <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
                  <Text style={[fontStyle.header3, { color: commonFontColor }]}>JOIN</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonOuterBorder} >
                <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
                  <Text style={[fontStyle.header3, { color: commonFontColor }]}>NO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View >
    </Modal >
  )
}

export default CCEnteringModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: mainBgColor,
    width: '80%',
    minHeight: '25%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: grey,
    borderWidth: 5,
    padding: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkGrey,
    width: 70,
    height: 60,
    borderRadius: 20,
    borderColor: purple,
    borderWidth: 4
  },
  buttonOuterBorder: {
    borderWidth: 5,
    borderRadius: 29,
    borderColor: grey,
    width: 90,
    height: 80,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
