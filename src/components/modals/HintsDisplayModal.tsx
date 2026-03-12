import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { commonFontColor, darkGrey, grey, mainBgColor, purple } from '../../styles/colors'
import fontStyle from '../../styles/fontStyles'
import useModalVisible from '../../store/modalStore'
import modalStyles from '../../styles/modalStyles'

interface HintsModalProps {
  hints: string
}

const HintsDisplayModal = ({ hints }: HintsModalProps) => {
  const activeModal = useModalVisible(state => state.activeModal);
  const closeModal = useModalVisible(state => state.closeModal);
  return (
    <Modal
      transparent={true}
      visible={activeModal == 'HintsDisplayModal' ? true : false}
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
                color: purple,
                padding: 5
              }
            ]}>HINTS</Text>
            <Text style={[
              fontStyle.normal, {
                textAlign: 'center',
                lineHeight: 20,
                color: commonFontColor,
                padding: 5
              }
            ]}>
              {hints}
            </Text>
            <View style={{
              borderWidth: 5,
              borderRadius: 29,
              borderColor: grey,
              width: 90,
              height: 90,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
                <Text style={[fontStyle.header2, { color: commonFontColor }]}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  )
}

export default HintsDisplayModal;

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
    height: 70,
    borderRadius: 20,
    borderColor: purple,
    borderWidth: 4
  }
})
