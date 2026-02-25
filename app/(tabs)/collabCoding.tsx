import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { useRef, useState } from 'react'

const CollabCoding = () => {
  const [textField1, setText1] = useState('');
  const [textField2, setText2] = useState('');
  const [textField3, setText3] = useState('');
  const [textField4, setText4] = useState('');


  const tfRef1 = useRef<TextInput | null>(null);
  const tfRef2 = useRef<TextInput | null>(null);
  const tfRef3 = useRef<TextInput | null>(null);
  const tfRef4 = useRef<TextInput | null>(null);

  function combineTextFields() {
    let roomId = textField1 + textField2 + textField3 + textField4;
    return roomId;
  }
  return (
    <SafeAreaView edges={['bottom']}
      style={{ backgroundColor: mainBgColor, flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Text
          style={
            [fontStyle.normal, { paddingHorizontal: 10, color: commonFontColor, lineHeight: 20, textAlign: 'center', paddingTop: 20 }]}
        >Welcome to collab collabcoding here you can collab with your friends and work on a single code base together!</Text>
        <View style={{ width: '55%', height: 100, flexDirection: 'row', gap: 6 }}>
          <TextInput
            keyboardType='numeric'
            value={textField1}
            onChangeText={setText1}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
              }
            ]}
            maxLength={1}
          />
          <TextInput
            keyboardType='numeric'
            value={textField2}
            onChangeText={setText2}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
              }
            ]}
            maxLength={1}
          />
          <TextInput
            keyboardType='numeric'
            value={textField3}
            onChangeText={setText3}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
              }
            ]}
            maxLength={1}
          />
          <TextInput
            keyboardType='numeric'
            value={textField4}
            onChangeText={setText4}
            style={[
              styles.inputField,
              {
                color: commonFontColor,
              }
            ]}
            maxLength={1}
          />
        </View>
        <TouchableOpacity style={styles.joinBtn} onPress={() => console.log(combineTextFields())}>
          <Text style={[fontStyle.header2, { color: commonFontColor }]}>Join</Text>
        </TouchableOpacity>
        <View style={{ width: '100%', borderStyle: 'dashed', borderWidth: 3, borderColor: 'white', marginTop: '10%' }} />
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
