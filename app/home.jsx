import { Pressable, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import mainPageStyles from '../src/styles/mainPageStyles'
import traversingLessonsStyles from '../src/styles/traversingLessonsStyles'
import PreviousBtn from '../assets/svg/Previous'
import NextBtn from '../assets/svg/Next'
import CircleProgress from '../assets/svg/CircleProgress'
import { useState } from 'react'
import ProgressBar from '../assets/svg/ProgressBar'

const radius = 40

const Home = () => {
    const [counter, setCounter] = useState(1)
    const [progress, setProgress] = useState(0)

    const increment = () => {
        if (counter === 2 || counter > 2) {
            setCounter(1)
        }
        else {
            setCounter(c => c+0.1)
        }
    }

    const increaseProgress  = () => {
        if (progress === 375 || progress > 375){
            setProgress(0)
        }
        else {
            setProgress(p => p + 37.5)
        }
    }

    const decreaseProgress = () => {
        if (progress === 0 || progress < 0) {
            setProgress(0)
        }
        else {
            setProgress(p => p - 37.5)
        }
    }
    return (
    <SafeAreaView style={{ flex:1, backgroundColor: '#2F2F2F' }}>
        <Header/>
        <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.background}>
            {/* Progress Bar */}
                <Text style={styles.progressMotive}>Keep going! Your are almost there</Text>
            <View>
                <ProgressBar progress={ progress }/>
            </View>
            {/* Progress Bar Ends Here */}

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
                        <View style={styles.container}>
                            <CircleProgress counter={counter}/>
                    </View>
                </View>
                {/* Lesson Progrssion ends here */}

                {/* Go button */}
                </View>
                <View style={mainPageStyles.goButtonPosition}>
                    <View style={[mainPageStyles.goButton, mainPageStyles.goButtonBorder]}>
                        <Pressable style={{flex:1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>increment()}>
                            <Text style={mainPageStyles.goButtonText}>GO!</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Go button ends here */}
            </View>
            {/* Main Ends here */}

            {/* Traversing Options */}
            <View style={traversingLessonsStyles.container}>
                <View style={traversingLessonsStyles.bg}>
                    {/* Previous Btn */}
                    <Pressable style={mainPageStyles.previousBtn} onPress={() => decreaseProgress()}>
                        <PreviousBtn style={{marginLeft: 5}}/>
                        <Text style={[traversingLessonsStyles.text, {marginTop: 5}]}>PREVIOUS</Text>
                    </Pressable>
                    {/* Previous Btn Ends here */}
                </View>
                <View style={traversingLessonsStyles.bg}>
                    {/* Next Button */}
                    <Pressable style={mainPageStyles.NextBtn} onPress={() => increaseProgress()}>
                        <NextBtn style={{marginLeft: 5}}/>
                        <Text style={[traversingLessonsStyles.text, {marginTop: 5}]}>NEXT</Text>
                    </Pressable>
                    {/* Next Button Ends Here */}
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
        fontSize: 9,
        marginLeft: 5,
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
    },
    container: { 
        alignItems: 'center',
        justifyContent: 'center', 
        flex: 1 
    },
})