import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import useModalVisible from '../../src/store/modalStore'
import useLevelDisplay from '../../src/store/levelDisplayStore'
import { commonFontColor, darkGrey, grey, purple, lightPurple, unlockedLessonColor, unlockedLessonBorderColor } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'

type ItemProps = {
  lesson?: string,
  title?: string,
  side: string
}

const UnlockedLesson = ({ lesson, side, title, }: ItemProps) => {
  const openModal = useModalVisible(state => state.openModal);
  const setLesson = useLevelDisplay(state => state.setLesson);
  return (
    <View style={[styles.shutterQuestions, side == 'left' ? styles.onRight : styles.onLeft]}>
      <View style={styles.title}>
        <Text style={[fontStyle.normal, { color: commonFontColor }]}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => { openModal('lessonModal'), setLesson({ lesson, title }) }}
        style={[
          styles.box,
          {
            justifyContent: 'center',
            alignItems: 'center'
          }
        ]}>
        <Text style={[styles.level, fontStyle.header1,]}>{lesson}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UnlockedLesson

const styles = StyleSheet.create({
  box: {
    backgroundColor: unlockedLessonColor,
    borderColor: unlockedLessonBorderColor,
    margin: 10,
    height: 80,
    width: 80,
    borderRadius: 10,
    borderWidth: 3,
    elevation: 5,
    borderBottomWidth: 5,
  },
  shutterQuestions: {
    borderColor: darkGrey,
    borderRadius: 13,
    borderWidth: 3,
    margin: 5,
    width: '80%',
    backgroundColor: grey,
    elevation: 5,
    borderBottomWidth: 5
  },
  onLeft: {
    flexDirection: 'row-reverse'
  },
  onRight: {
    flexDirection: 'row'
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  level: {
    color: commonFontColor
  },
})
