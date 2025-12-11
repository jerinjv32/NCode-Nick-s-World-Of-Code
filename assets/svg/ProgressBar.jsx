import { StyleSheet, Text, View } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

const height= 15
const width = 375
const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
        <Svg width={375} height={15} viewBox='0 0 375 15'>
            <Rect x={0} y={0} height={15} width={375} fill={'#212020'} strokeWidth={4} stroke={'#35315C'} rx={10}/>
            <Rect 
              x={0} 
              y={0} 
              height={progress > 0 ? 15 : 0} 
              width={progress} 
              fill={'#35315C'} 
              strokeWidth={4} 
              stroke={'#35315C'} 
              rx={progress > 0 ? 10 : 0}
              ry={progress > 0 ? 10 : 0} 
            />
        </Svg>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})