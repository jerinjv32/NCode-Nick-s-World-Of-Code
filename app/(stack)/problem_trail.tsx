import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, displayQuestionColor, grey } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'

const problem_trail = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1, backgroundColor: grey}}>
      <View style={styles.displayQuestion}>
        <Text style={[
          fontStyle.normal, 
          {
            color: commonFontColor, 
            textAlign:'center',
            lineHeight: 15
          }
        ]}>
          write a program to swap two numbers using a temporary vafriableer
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default problem_trail

const styles = StyleSheet.create({
  displayQuestion:{
    backgroundColor: displayQuestionColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  }
})