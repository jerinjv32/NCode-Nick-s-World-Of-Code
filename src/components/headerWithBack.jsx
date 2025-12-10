import { StyleSheet, Text, View } from 'react-native'
import Arrow from '../../assets/svg/arrow'

const headerWithBack = () => {
  return (
    <View style={styles.header}>
        <View style={styles.headerTitleBox}>
            <Arrow/>
            <Text style={styles.headerTitle}>{title}</Text>
            <View style={styles.profile}></View>
        </View>
    </View>
  )
}

export default headerWithBack

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor: '#282828',
        height: 65,
    },
    headerTitleBox:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
    },
    headerTitle:{
        fontSize: 10,
        fontFamily: 'press-start-2p',
        color: 'white'        
    },
    profileBox:{
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 10,
    },
    profile:{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#35315C',
        borderRadius: 50,
    }
})