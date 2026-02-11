import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, displayQuestionColor, grey, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { useRouter } from 'expo-router'
import useModalVisible from '../../src/store/modalStore'
import { supabase } from '../../lib/supabase'
import useLevelDisplay from '../../src/store/levelDisplayStore'

const problem_trail = () => {
  const router = useRouter();
  const closeModal = useModalVisible(state => state.closeModal);
  const [displayQuestion, setQuestion] = useState();
  const lesson_no = useLevelDisplay(state => state.lesson);
  useEffect(() => {
    closeModal();
    async function getQuestion() {
      const { data, error } = await supabase
        .from('problems_trail')
        .select('problem')
        .eq('lesson_no', lesson_no)
        .single();

      if (error) {
        console.log("Error:", error);
      }
      setQuestion(data.problem);
    }

    getQuestion();
  },
    []);
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: grey }}>
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
        <Text style={[fontStyle.normal, { textAlign: 'center' }]}>Image</Text>
      </View>
      {/* Buttons */}
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => router.push('/editorForSolving')}>
          <Text style={[fontStyle.header2, { color: commonFontColor }]}>Solve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[fontStyle.header2, { color: commonFontColor }]}>Hints?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    backgroundColor: displayQuestionColor,
    margin: 20,
    borderRadius: 10,
    padding: 20,
    height: 200,
  }
})
