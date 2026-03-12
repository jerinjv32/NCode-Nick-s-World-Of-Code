import axios from 'axios'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, darkGrey, displayQuestionColor, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { useRouter } from 'expo-router'
import useModalVisible from '../../src/store/modalStore'
import { supabase } from '../../lib/supabase'
import useLevelDisplay from '../../src/store/levelDisplayStore'
import address from '../../src/config/env'
import HintsDisplayModal from '../../src/components/modals/HintsDisplayModal'

interface MyCallBackPros {
  (hint: string): void
}
const problem_trail = () => {
  const [hints, setHints] = useState('Loading...');
  const [media, setMedia] = useState();
  const router = useRouter();
  const openModal = useModalVisible(state => state.openModal);
  const closeModal = useModalVisible(state => state.closeModal);
  const [displayQuestion, setQuestion] = useState();
  const lesson_no = useLevelDisplay(state => state.lesson);
  useEffect(() => {
    closeModal();
    async function getQuestion() {
      const { data, error } = await supabase
        .from('problems_trail')
        .select('problem, image_url')
        .eq('lesson_no', lesson_no)
        .single();

      if (error) {
        console.log("Error:", error);
      }
      setQuestion(data.problem);
      setMedia(data.image_url)
    }

    getQuestion();
  }, []);

  async function provideHints(question: string) {
    try {
      const response = await axios.post('http://' + address + ':3000/api/hints', {
        'question': question
      });
      setHints(response.data.content);
    } catch (e) {
      console.error('Error:', e)
    }
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: mainBgColor }}>
      <HintsDisplayModal hints={hints} />
      {/* Display question */}
      <View style={styles.displayQuestion}>
        <Text style={[
          fontStyle.normal,
          {
            color: commonFontColor,
            textAlign: 'center',
            lineHeight: 15,
          }
        ]}>
          {displayQuestion}
        </Text>
      </View>
      {/* Display image */}
      <View style={styles.displayImages}>
        <Image source={{ uri: media }} resizeMode='contain' style={{
          width: '100%',
          height: undefined,
          aspectRatio: 1,
        }} />
      </View>
      {/* Buttons */}
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => router.push('/editorForSolving')}>
          <Text style={[fontStyle.header2, { color: commonFontColor }]}>Solve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => { provideHints(displayQuestion), openModal('HintsDisplayModal') }}>
          <Text style={[fontStyle.header2, { color: commonFontColor }]}>Hints?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default problem_trail

const styles = StyleSheet.create({
  displayQuestion: {
    backgroundColor: displayQuestionColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 5,
    maxHeight: 200,
    minHeight: 80,
    borderRadius: 10,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  btnStyle: {
    backgroundColor: purple,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 3,
    borderRadius: 10,
  },
  displayImages: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: displayQuestionColor,
    alignSelf: 'center',
    margin: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  }
})
