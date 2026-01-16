import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonFontColor, grey } from '../styles/colors'
import fontStyle from '../styles/fontStyles'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyle.header1, {color: commonFontColor}]}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        backgroundColor: grey,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})