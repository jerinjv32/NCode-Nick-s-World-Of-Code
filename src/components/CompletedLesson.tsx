import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { comepletedLessonBorderColor, comepletedLessonColor, grey } from '../styles/colors'
import fontStyle from '../styles/fontStyles'


type ItemProps = {
  lesson?: string,
  title?: string,
  side: string
}


const CompletedLesson = ({ lesson, side, title, }: ItemProps) => {
  return (
    <View style={[styles.shutterQuestions, side == 'left' ? styles.onRight : styles.onLeft]}>
      <View style={styles.title}>
        <Text style={[fontStyle.normal, { color: comepletedLessonColor }]}>{title}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.boxLocked,
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

export default CompletedLesson

const styles = StyleSheet.create({
  boxLocked: {
    backgroundColor: comepletedLessonColor,
    borderColor: comepletedLessonBorderColor,
    margin: 10,
    height: 80,
    width: 80,
    borderRadius: 10,
    borderWidth: 3,
  },
  shutterQuestions: {
    borderColor: grey,
    borderRadius: 13,
    borderWidth: 3,
    margin: 5,
    width: '80%',
    backgroundColor: grey,
    borderBottomWidth: 3
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
    color: 'white',
  },
})
