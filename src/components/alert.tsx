import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { commonFontColor, darkGrey, grey, mainBgColor, purple, transparent } from '../styles/colors'
import fontStyle from '../styles/fontStyles'
import useModalVisible from '../store/modalStore'
import useLevelDisplay from '../store/levelDisplayStore'
import { useRouter } from 'expo-router'

const AlertBox = () => {
    const modalVisible = useModalVisible(state => state.modalVisible);
    const setModalVisible = useModalVisible(state => state.setModalVisible);
    const lesson = useLevelDisplay(state => state.lesson);
    const title = useLevelDisplay(state => state.title);
    const router = useRouter();
    return (
        <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            animationType='fade'
        >
            <View style={styles.centeredView}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <Text style={[
                            fontStyle.header1, {
                                color: commonFontColor,
                                padding: 5
                            }
                        ]}>
                            Lesson:{lesson}
                        </Text>
                        <Text style={[fontStyle.header2, { color: commonFontColor }]}>{title}</Text>
                        <View style={{
                            borderWidth: 5,
                            borderRadius: 29,
                            borderColor: grey,
                            width: 100,
                            height: 100,
                            marginTop: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity style={styles.button} onPress={() => router.push('/problem_trail')}>
                                <Text style={[fontStyle.header2, { color: commonFontColor }]}>GO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}

export default AlertBox

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: mainBgColor,
        width: '80%',
        height: '35%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: grey,
        borderWidth: 5
    },
    overlay: {
        position: 'absolute',
        backgroundColor: transparent,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkGrey,
        width: 80,
        height: 80,
        borderRadius: 20,
        borderColor: purple,
        borderWidth: 4
    }
})