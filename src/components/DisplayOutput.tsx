import { StyleSheet, Text, View, Pressable, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { alertRed, clear, mainBgColor, terminalColor } from '../styles/colors'
import useModalVisible from '../store/modalStore'
import modalStyles from '../styles/modalStyles'

interface Output {
    output: string
}

const DisplayOutput = ({ output }: Output) => {
    const activeModal = useModalVisible(state => state.activeModal);
    const closeModal = useModalVisible(state => state.closeModal);
    return (
        <Modal
            transparent={true}
            onRequestClose={() => closeModal()}
            visible={activeModal == 'outputModal' ? true : false}
            animationType='slide'
        >
            <View style={styles.centeredView}>
                <TouchableWithoutFeedback onPress={() => closeModal()}>
                    <View style={[modalStyles.overlay, { flex: 1, backgroundColor: clear }]} />
                </TouchableWithoutFeedback>

                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: '95%',
                        height: '60%',
                        borderWidth: 6,
                        borderColor: mainBgColor,
                        borderRadius: 10,
                        elevation: 5,
                        backgroundColor: mainBgColor
                    }}>
                        <Pressable onPress={() => closeModal()}>
                            <Text
                                style={{
                                    color: alertRed,
                                    padding: 2
                                }}
                            >Close</Text>
                        </Pressable>
                        <ScrollView style={styles.output}>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'GoogleSansCode-Regular',
                                padding: 10
                            }}>
                                {output}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DisplayOutput

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    output: {
        backgroundColor: terminalColor,
        borderRadius: 5,
        borderColor: 'black'
    }
})