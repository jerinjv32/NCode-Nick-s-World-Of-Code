import Svg, { Circle, Text, TSpan } from "react-native-svg";
import { StyleSheet, View } from 'react-native'

const radius = 40
const pi = Math.PI
const cir = 2 * pi * radius

export default function CircleProgress({ counter, lesson, totalLesson }) {

    return (
        <View style={{ width: "80%", aspectRatio: 1, alignSelf: 'center'}}>
            <Svg width={300} height={300} viewBox="0 0 368 368">
                <Circle
                    cx={200}
                    cy={200}
                    r={160}
                    fill="none"
                    stroke="#282828"
                    strokeWidth={48}
                    strokeDasharray={cir * 4}
                    strokeDashoffset={(cir / 2) * 4}
                    transform="rotate(180 200 200)"
                />
                <Circle
                    cx={200}
                    cy={200}
                    r={160}
                    fill="none"
                    stroke="#35315C"
                    strokeWidth={48}
                    strokeDasharray={cir * 4}
                    strokeDashoffset={(cir / counter) * 4}
                    transform="rotate(180 200 200)"
                />

                <Text
                    x={188}
                    y={132}
                    fill="white"
                    fontSize={16}
                    fontFamily="press-start-2p"
                    textAnchor="middle"
                >
                    {lesson}/{totalLesson}
                </Text>

                <Text
                    y={132}
                    fill="white"
                    fontSize={16}
                    fontFamily="press-start-2p"
                    textAnchor="middle"
                >
                    <TSpan x={208} dy={24}>CHAPTER 9:</TSpan>
                    <TSpan x={208} dy={24}>ENCOUNTER</TSpan>
                    <TSpan x={208} dy={24}>WITH ENIGMA</TSpan>
                </Text>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create();