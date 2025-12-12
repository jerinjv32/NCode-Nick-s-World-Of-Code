import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'

const chatBot = () => {
  const [message, newMessage] = useState(
    [
      {
        id: Math.random(),
        title: "The lapis philosophorum, or philosopher's stone...",
        role: 'user'
      },
      {
        id: Math.random(),
        title: "The lapis philosophorum, or philosopher's stone..",
        role: 'bot'
      },
      {
        id: Math.random(),
        title: "The lapis philosophorum, or philosopher's stone...",
        role: 'user'
      },
      
    ])

    const ChooseStyle = ({title,role}) => {
      if (role === 'bot'){
        return(
          <>
            <Image source={require('../assets/icons/chat_bot_avatar.png')} style={[styles.avatar, {marginRight: 15}]}/>
            <View style={[styles.botMessage, styles.msgCommonstyle]}>
            <Text style={styles.messageText}>{title}</Text>
            </View>
          </>
        )
      }
      else{
        return(
          <>
            <View style={[styles.userMessage, styles.msgCommonstyle]}>
            <Text style={styles.messageText}>{title}</Text>
            </View>
            <Image source={require('../assets/icons/user_profile.png')} style={[styles.avatar, {marginLeft: 15}]}/>
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
    <SafeAreaView style={{flex:1, backgroundColor: '#2F2F2F'}}>
      <Header/>
          <View style={{flex: 1}}>
              <FlatList
                data={message}
                renderItem={({item:row}) => <Item title={row.title} role={row.role}/>}
                keyExtractor={row => row.id}
                inverted
              />
            </View>
          <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : 0}>
            <View style={styles.userInput}>
              <TextInput style={styles.inputText} placeholder='Ask Away' placeholderTextColor={'rgba(255 255 255 / 0.5)'}></TextInput>
            </View>
          </KeyboardAvoidingView>
        <Footer/>
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
      backgroundColor: '#212020',
      marginVertical: 10,
    },
    messageText:{
      color: 'white',
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
      backgroundColor: '#212020',
      borderRadius: 50,
      borderColor: '#35315C',
      marginTop: 10,
      borderWidth: 1,
    },
    msgContainer:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    userInput:{
      width: '95%',
      height: 50,
      borderWidth: 3,
      borderColor: '#35315C',
      backgroundColor: '#212020',
      borderRadius: 50,
      elevation: 5,
      shadowColor: '#171717',
      marginBottom: 10,
      marginHorizontal: 10
    },
    inputText:{
      color: 'white',
      marginLeft: 20
    }
})