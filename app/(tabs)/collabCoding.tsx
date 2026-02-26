import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, darkGrey, focusedBg, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { useRef, useState } from 'react'
import useModalVisible from '../../src/store/modalStore'
import CCEnteringModal from '../../src/components/modals/CCEntertingModal'
import ActualAlert from '../../src/components/ActualAlert'

const CollabCoding = () => {
  const [textField1, setText1] = useState<string>('');
  const [textField2, setText2] = useState<string>('');
  const [textField3, setText3] = useState<string>('');
  const [textField4, setText4] = useState<string>('');
  const roomIdRef = useRef<string>('');
  const [roomId, setRoomId] = useState<string>('');

  const [focusedTF, setFocusTF] = useState<Number>();


  const openModal = useModalVisible(state => state.openModal);

  function combineTextFields() {
    roomIdRef.current = textField1 + textField2 + textField3 + textField4;
    setRoomId(roomIdRef.current);
  }
  return (
    <SafeAreaView edges={['bottom']}
      style={{ backgroundColor: mainBgColor, flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <ActualAlert desc='Please enter a valid room Id' />
        <CCEnteringModal roomId={roomId} />
        <Text
          style={
            [fontStyle.normal, { paddingHorizontal: 10, color: commonFontColor, lineHeight: 20, textAlign: 'center', paddingTop: 20 }]}
        >Welcome to collab collabcoding here you can collab with your friends and work on a single code base together!</Text>
        <View style={{ width: '55%', height: 100, flexDirection: 'row', gap: 6 }}>
          <TextInput
            keyboardType='numeric'
            value={textField1}
            onChangeText={setText1}
            onFocus={() => setFocusTF(1)}
            onBlur={() => setFocusTF(0)}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
                backgroundColor: focusedTF == 1 ? focusedBg : darkGrey,
                borderColor: focusedTF == 1 ? purple : grey
              }
            ]}
            maxLength={1}
          />
          <TextInput
            keyboardType='numeric'
            value={textField2}
            onFocus={() => setFocusTF(2)}
            onBlur={() => setFocusTF(0)}
            onChangeText={setText2}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
                borderColor: focusedTF == 2 ? purple : grey,
                backgroundColor: focusedTF == 2 ? focusedBg : darkGrey
              }
            ]}
            maxLength={1}
          />
          <TextInput
            keyboardType='numeric'
            value={textField3}
            onFocus={() => setFocusTF(3)}
            onBlur={() => setFocusTF(0)}
            onChangeText={setText3}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
                borderColor: focusedTF == 3 ? purple : grey,
                backgroundColor: focusedTF == 3 ? focusedBg : darkGrey
              }
            ]}
            maxLength={1}
          />
          <TextInput
            keyboardType='numeric'
            value={textField4}
            onFocus={() => setFocusTF(4)}
            onBlur={() => setFocusTF(0)}
            onChangeText={setText4}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
                borderColor: focusedTF == 4 ? purple : grey,
                backgroundColor: focusedTF == 4 ? focusedBg : darkGrey
              }
            ]}
            maxLength={1}
          />
        </View>
        <TouchableOpacity style={styles.joinBtn} onPress={() => {
          combineTextFields()
          roomIdRef.current.length < 4 ? openModal('AlertModal') : openModal('CCEnteringModal')
        }}>
          <Text style={[fontStyle.header2, { color: commonFontColor }]}>Join</Text>
        </TouchableOpacity>
        <View style={{
          width: '100%',
          borderStyle: 'dashed',
          borderWidth: 3,
          borderColor: 'white',
          marginTop: '10%'
        }} />
        <Text style={[fontStyle.normal, { paddingHorizontal: 10, color: commonFontColor, lineHeight: 20, textAlign: 'center', paddingTop: 20 }]}
        >Generate a room and share the code with your friend.</Text>
        <TouchableOpacity style={[styles.joinBtn, { height: '10%' }]} onPress={() => console.log(combineTextFields())}>
          <Text style={[fontStyle.header2, { color: commonFontColor }]}>Generate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default CollabCoding

const styles = StyleSheet.create({
  inputField: {
    textAlign: 'center', backgroundColor: darkGrey,
    width: '25%',
    height: '63%',
    alignSelf: 'center',
    borderColor: grey,
    borderWidth: 3,
    borderRadius: 10,
  },
  joinBtn: {
    marginTop: 20,
    backgroundColor: purple,
    width: '30%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: lightPurple,
    borderRadius: 10,
    elevation: 5
  }
});
