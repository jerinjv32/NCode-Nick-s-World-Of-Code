import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { commonFontColor, darkGrey, grey, lightPurple, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { useState } from "react";
interface BannerProps {
  level: string,
  details: string
}
const BannerComponent = ({ level, details }: BannerProps) => {
  const [displayDetails, setDisplayDetails] = useState<'flex' | 'none'>('none')
  return (
    <View style={styles.shutter}>
      <View style={[styles.banner]}>
        <Text style={[styles.bannerText, fontStyle.header1]}>LEVEL {level}</Text>
        <View style={styles.bannerUnderLine}>
          <TouchableOpacity onPress={() => setDisplayDetails(prev => prev == 'flex' ? 'none' : 'flex')}>
            <Text
              style={[
                fontStyle.normal,
                {
                  color: commonFontColor,
                  padding: 8,
                  backgroundColor: purple,
                  textAlign: 'center',
                  borderRadius: 5
                }]
              }
            >
              Preview
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              fontStyle.normal,
              {
                color: commonFontColor,
                padding: 5,
                lineHeight: 15,
                display: displayDetails,
                textAlign: 'justify',
              }]}>
            {details}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default BannerComponent;

const styles = StyleSheet.create({
  shutter: {
    backgroundColor: darkGrey,
    width: '100%',
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,
    borderColor: grey,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  bannerText: {
    color: commonFontColor,
    paddingLeft: 20,
  },
  bannerUnderLine: {
    padding: 5,
    borderStyle: 'dashed',
    backgroundColor: grey,
    borderWidth: 3,
    borderColor: lightPurple,
    borderRadius: 10,
    width: '95%',
    marginTop: 10,
  },
})
