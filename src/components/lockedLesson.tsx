import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import useModalVisible from '../store/modalStore'
import useLevelDisplay from '../store/levelDisplayStore'
import { darkGrey, grey, lockedLessonBorderColor, lockedLessonColor, mainBgColor } from '../styles/colors'
import fontStyle from '../styles/fontStyles'

type ItemProps = {
    lesson?: string,
    title?: string,
    side: string
}

const LockedLesson = ({ lesson, side, title, }: ItemProps) => {
    const openModal = useModalVisible(state => state.openModal);
    const setLesson = useLevelDisplay(state => state.setLesson);
    return (
        <View style={[styles.shutterQuestions, side == 'left' ? styles.onRight : styles.onLeft]}>
            <View style={styles.title}>
                <Text style={[fontStyle.normal, { color: mainBgColor }]}>{title}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { openModal('lockedLessonAlertModal'), setLesson({ lesson, title }) }}
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

export default LockedLesson

const styles = StyleSheet.create({
    boxLocked: {
        backgroundColor: lockedLessonColor,
        borderColor: lockedLessonBorderColor,
        margin: 10,
        height: 80,
        width: 80,
        borderRadius: 10,
        borderWidth: 3,
    },
    shutterQuestions: {
        borderColor: darkGrey,
        borderRadius: 13,
        borderWidth: 3,
        margin: 5,
        width: '70%',
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
        color: grey,
    },
})