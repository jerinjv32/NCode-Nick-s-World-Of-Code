import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { alertRed, commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import axios from 'axios'
import useCodeStoreEditor from '../../src/store/codeStoreEditor'
import DisplayOutput from '../../src/components/DisplayOutput'
import useModalVisible from '../../src/store/modalStore'
import Run from '../../src/components/Run'
import Output from '../../src/components/Output'
import { useEffect, useState, useRef } from 'react'
import fontStyle from '../../src/styles/fontStyles'
import useRoomStore from '../../src/store/roomIdStore'
import address from '../../src/config/env'

interface DisplayRoomIdProps {
  roomIdProp: string
}
const DisplayRoomId = ({ roomIdProp }: DisplayRoomIdProps) => {
  return (
    <Text style={[fontStyle.normal, { color: purple }]}>Room Id:{roomIdProp}</Text>
  )
}

const CollabEditor = () => {
  const closeModal = useModalVisible(state => state.closeModal);
  const roomId = useRoomStore(state => state.roomId);
  const currRoomIdRef = useRef<string>(roomId);
  const wsRef = useRef<WebSocket | null>(null);


  useEffect(() => {
    closeModal();
    const ws = new WebSocket('ws://' + address + ':8080');
    wsRef.current = ws;

    ws.onopen = () => {
      const data = { operation: 'init', roomId: currRoomIdRef.current }
      console.log(roomId);
      ws.send(JSON.stringify(data));
    }

    ws.onmessage = (e) => {
      let data = JSON.parse(e.data)
      setCode(data.code)
    }
    ws.onclose = (e) => {
      console.log("Disconnected from websocket: ", e.code, e.reason);
    }
    return () => ws.close();
  }, []);


  function sendToServer() {
    if (wsRef.current.readyState === wsRef.current.OPEN) {
      const data = { operation: 'update', roomId: currRoomIdRef, code: code };
      wsRef.current.send(JSON.stringify(data));
    }
  }

  function handleInput(value: string) {
    sendToServer()
    setCode(value);
  }
  const code = useCodeStoreEditor(state => state.code);
  const setCode = useCodeStoreEditor(state => state.setCode);
  const output = useCodeStoreEditor(state => state.output);
  const setOutput = useCodeStoreEditor(state => state.setOutput);

  async function compile(program: string) {
    try {
      // const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
      //   "language": "python",
      //   "version": "3.10.0",
      //   "files": [
      //     {
      //       "content": program
      //     }
      //   ],
      // });
      const responer = await axios.get('')
      // setOutput(response.data.run.output);
    } catch (error) {
      console.error("Compiler Error:", error);
    }
  }
  const openModal = useModalVisible(state => state.openModal);
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: darkGrey }}>
      <DisplayOutput output={output} />
      <View style={styles.tab}>
        <DisplayRoomId roomIdProp={roomId} />
        <TouchableOpacity activeOpacity={0.5} onPress={() => { openModal('outputModal'); }}>
          <Output />
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
          autoCorrect={false}
          onChangeText={(value) => handleInput(value)}
        />
      </View>
    </SafeAreaView>
  )
}
export default CollabEditor;

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

