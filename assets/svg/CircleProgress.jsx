import Svg, { Circle } from "react-native-svg";
import { StyleSheet, View } from 'react-native'

const radius = 40
const pi = Math.PI
const cir = 2*pi*radius

export default function CircleProgress({ counter }) {

    return(
        <View style={styles.container}>
            <Svg width={300} height={300} viewBox="0 0 100 100">
                <Circle cx={50} cy={50} r={40} fill={'none'} stroke={'#282828'} strokeWidth={12} strokeDasharray={cir} strokeDashoffset={cir/2} transform="rotate(180 50 50)"/>
                <Circle cx={50} cy={50} r={40} fill={'none'} stroke={'#35315C'} strokeWidth={12} strokeDasharray={cir} strokeDashoffset={cir/counter} transform="rotate(180 50 50)"/>
            </Svg>
    </View>
    ) 
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        justifyContent: 'center', 
        flex: 1 },
    }
);