import { StyleSheet, Text, View } from 'react-native'
import ProblemTrail from '../../assets/svg/ProblemTrail'
import ChatBot from '../../assets/svg/ChatBot'
import CollabCoding from '../../assets/svg/CollabCoding'
import CodeEditor from '../../assets/svg/CodeEditor'
import { Link, usePathname} from 'expo-router'



const footer = () => {
    let colorOfBorder1 = '#35315C'
    let colorOfBorder2  = '#35315C'
    let colorOfBorder3  = '#35315C'

    let elevation1 = 0
    let elevation2 = 0
    let elevation3 = 0
    const pathName = usePathname()

    switch(pathName){
        case '/home':
            colorOfBorder1 = '#6760AB'
            elevation1 = 5
            break
        case '/chatBot':
            colorOfBorder2 = '#6760AB'
            elevation2 = 5
            break 
        case '/collabCoding':
            colorOfBorder3 = '#6760AB'
            elevation3 = 5
            break 
    }
    return (
        <View style={styles.footer}>
            <View style={[styles.box, , {borderColor: colorOfBorder1, elevation: elevation1}]}>
                <Link href={'/home'}>
                    <View style={styles.iconProperty}><ProblemTrail/></View>
                </Link>
            </View>
            <View style={[styles.box, , {borderColor: colorOfBorder2, elevation: elevation2}]}>
                <Link href={'/chatBot'}>
                    <View style={styles.iconProperty}><ChatBot/></View >
                </Link>
            </View>
            <View style={[styles.box, , {borderColor: colorOfBorder3, elevation: elevation3}]}>
                <Link href={'/collabCoding'}>
                    <View style={styles.iconProperty}><CollabCoding/></View >
                </Link>
            </View>
            <View style={styles.box}>
                <Link href={'/codeEditor'}>
                    <View style={styles.iconProperty}><CodeEditor/></View>
                </Link>
            </View>
        </View>
  )
}

export default footer

const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#282828',
        height: 98,
    },
    box:{
        height: 70,
        width: 70,
        backgroundColor: '#212020',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#35315C',
    },
    iconProperty:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})