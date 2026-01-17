import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, displayQuestionColor, grey, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'

const problem_trail = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: grey }}>
      {/* Display question */}
      <View style={styles.displayQuestion}>
        <Text style={[
          fontStyle.normal,
          {
            color: commonFontColor,
            textAlign: 'center',
            lineHeight: 15
          }
        ]}>
          write a program to swap two numbers using a temporary variable
        </Text>
      </View>
      {/* Display image */}
      <View style={styles.displayImages}>
        <Text style={[fontStyle.normal, {textAlign: 'center'}]}>Image</Text>
      </View>
      {/* Buttons */}
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[fontStyle.header2,{color: commonFontColor}]}>Solve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[fontStyle.header2,{color: commonFontColor}]}>Hints?</Text>
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
    borderRadius: 10,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  btnStyle:{
    backgroundColor: purple,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 3,
    borderRadius: 10,
  },
  displayImages:{
    backgroundColor: displayQuestionColor,
    margin: 20,
    borderRadius: 10,
    padding: 20,
    height: 200,
  }
})