import { Text, View, Pressable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { mainBgColor } from '../../src/styles/colors';
import CollabCoding from '../(tabs)/collabCoding';
import { useEffect } from 'react';


const CollabEditor = () => {

  function genRoomId() {
    let randomNum: number = Math.floor(Math.random() * (4000 - 2000) + 2000);
    let roomId: string = randomNum.toString();
    return roomId.toString();
  }

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.1.6:8080');
    ws.onopen = () => {
      console.log('connected');
      ws.send(genRoomId());
    }

    ws.onmessage = (e) => {
      console.log("Received message:", e.data);
    }

    ws.onclose = (e) => {
      console.log("Disconnected from websocket: ", e.code, e.reason);
    }

    return () => ws.close();
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Text>Collab Coding</Text>
    </SafeAreaView>
  );
}

export default CollabEditor;
