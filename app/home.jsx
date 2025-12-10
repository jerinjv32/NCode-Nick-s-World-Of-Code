/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import mainPageStyles from '../src/styles/mainPageStyles'
import traversingLessonsStyles from '../src/styles/traversingLessonsStyles'
import PreviousBtn from '../assets/svg/previous'
import NextBtn from '../assets/svg/Next'

const Home = () => {
 return (
    <SafeAreaView style={{ flex:1, backgroundColor: '#2F2F2F' }}>
        <Header/>
        <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.background}>
            {/* Progress Bar */}
            <View>
                <Text style={styles.progressMotive}>Keep going! Your are almost there</Text>
                <View style={[styles.progressBar, styles.progressBarBorder]}>
                    <View style={styles.fillColor}></View>
                </View>
            </View>
            
            {/* Main */}
            <View style={[mainPageStyles.container, mainPageStyles.border]}>
                {/* Current level */}
                <View>
                    <Text style={mainPageStyles.levels}>LEVEL 2</Text>
                    <Text style={mainPageStyles.lessons}>Lists In Python</Text>
                </View>
                {/* Current level ends here */}

                {/* Lesson Progression */}
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={mainPageStyles.lessonProgression}>
                    <Text>Lesson Progression Goes here</Text>
                </View>
                {/* Lesson Progrssion ends here */}

                {/* Go button */}
                </View>
                <View style={mainPageStyles.goButtonPosition}>
                    <View style={[mainPageStyles.goButton, mainPageStyles.goButtonBorder]}>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={mainPageStyles.goButtonText}>GO!</Text>
                        </View>
                    </View>
                </View>
                {/* Go button ends here */}
            </View>
            {/* Main Ends here */}

            {/* Traversing Options */}
            <View style={traversingLessonsStyles.container}>
                <View style={traversingLessonsStyles.bg}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 7}}>
                        <PreviousBtn style={{marginLeft: 5}}/>
                        <Text style={[traversingLessonsStyles.text, {marginTop: 5}]}>PREVIOUS</Text>
                    </View>
                </View>
                <View style={traversingLessonsStyles.bg}>
                    <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', marginTop: 7}}>
                        <NextBtn style={{marginLeft: 5}}/>
                        <Text style={[traversingLessonsStyles.text, {marginTop: 5}]}>NEXT</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <Footer/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressMotive:{
        color: 'white',
        fontFamily: 'press-start-2p',
        fontSize: 10,
        marginLeft: 5,
        marginBottom: 10,
    },
    progressBar:{
        width: 370,
        height: 16,
        backgroundColor: '#212020'
    },
    progressBarBorder:{
        borderWidth: 3,
        borderColor: '#35315C',
        borderRadius: 10,
    },
    fillColor:{
        backgroundColor: '#35315C',
        width: 100,
        height: 10
    }
})