import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import SendIcon from '../../assets/svg/SendIcon'
import { boxShadowColor, commonFontColor, darkGrey, purple } from '../../src/styles/colors'
import axios from 'axios'
import Markdown from 'react-native-markdown-display'
import useStoreMessages from '../../src/store'

const chatBot = () => {
  const [text, setText] = useState('')
  
  const message = useStoreMessages(state => state.message);
  const addBotMessage = useStoreMessages(state => state.addBotMessage)
  const addUserMessage = useStoreMessages(state => state.addUserMessage)
  
  // Setting app user message and emptying the textinput area
  const sendMessage = (text) => {
    if (!text.trim()) return;
    addUserMessage(text)
    setText('');
  };

  // Fetching and passing the prompt to the model
  const aiResponse = async (prompt, callback) =>{
    try{
      const response = await axios.post('http://192.168.1.7:8001/chat',{
        prompt: prompt
      });
      console.log(response.data.title)
      const botText = response.data.title
      callback(botText)
    }
    catch (error){
      console.error("Error:", error)
      callback("There went something wrong...")
    }
  }
  const displayMessage = (botText) => {
      addBotMessage(botText);
  }
  const ChooseStyle = ({title,role}) => {
    // Response from AI 
    if (role === 'bot'){
      return(
        <>
          <Image source={require('../../assets/icons/chat_bot_avatar.png')} style={[styles.avatar, {marginRight: 15}]}/>
          <View style={[styles.botMessage, styles.msgCommonstyle]}>
            <Markdown style={{
              body:{
                color: commonFontColor,
                fontSize: 12,
                fontFamily: 'Roboto',
                padding: 7
              },
              code_inline:{
                backgroundColor: 'black'
              },
              code_block:{
                backgroundColor: 'black'
              },
              fence:{
                backgroundColor: purple
              }
            }}>{title}</Markdown>
          </View>
        </>
      )
    }
    else{
      // User Message Prop
      return(
        <>
          <View style={[styles.userMessage, styles.msgCommonstyle]}>
            <Markdown style={{
              body:{
                color: commonFontColor,
                fontSize: 12,
                fontFamily: 'Roboto',
                padding: 7
              }
            }}>{title}</Markdown>
          </View>
          <Image source={require('../../assets/icons/user_profile.png')} style={[styles.avatar, {marginLeft: 15}]}/>
        </>
      )
    }
  }
  const Item = ({title, role}) => (
      <View style={styles.msgContainer}>
          <ChooseStyle title={title} role={role}/>
      </View>
  )
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1, backgroundColor: '#2F2F2F'}}>
          <View style={{flex: 1}}>
              <FlatList
                data={message} 
                renderItem={({item:row}) => <Item title={row.title} role={row.role}/>}
                keyExtractor={row =>  row.id.toString()}
                inverted
              />
            </View>
          <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : 110}>
            <View style={styles.userInput}>
              <TextInput value={text} style={styles.inputText} placeholder='Ask Away' placeholderTextColor={'rgba(255 255 255 / 0.5)'} 
              onChangeText={setText}>
              </TextInput>
              <TouchableOpacity onPress={() => {sendMessage(text), aiResponse(text, displayMessage)}}>
                <SendIcon style={{marginTop: 10, marginBottom: 10, marginRight: 10}}/>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default chatBot

const styles = StyleSheet.create({
    botMessage:{
      backgroundColor: '#282828',
      marginVertical: 10,
    },
    userMessage:{
      backgroundColor: darkGrey,
      marginVertical: 10,
    },
    messageText:{
      color: commonFontColor,
      fontFamily: 'Roboto',
      fontSize: 12,
      textAlign: 'justify',
      padding: 10
    },
    msgCommonstyle:{
      borderRadius: 10,
      width: 320,
    },
    avatar:{
      width: 40,
      height: 40,
      backgroundColor: darkGrey,
      borderRadius: 50,
      borderColor: purple,
      marginTop: 10,
      borderWidth: 1,
    },
    msgContainer:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    userInput:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      borderWidth: 3,
      borderColor: purple,
      backgroundColor: darkGrey,
      borderRadius: 50,
      elevation: 5,
      shadowColor: boxShadowColor,
      marginBottom: 10,
      marginHorizontal: 10
    },
    inputText:{
      color: commonFontColor,
      marginLeft: 20,
      width: 325
    }
})