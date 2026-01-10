import { TouchableOpacity, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import mainPageStyles from '../../src/styles/mainPageStyles'
import traversingLessonsStyles from '../../src/styles/traversingLessonsStyles'
import PreviousBtn from '../../assets/svg/Previous'
import NextBtn from '../../assets/svg/Next'
import CircleProgress from '../../assets/svg/CircleProgress'
import { useEffect, useState } from 'react'
import ProgressBar from '../../assets/svg/ProgressBar'
import { grey, darkGrey, purple, commonFontColor } from '../../src/styles/colors'


const totalLesson = 7

const Home = () => {
    const [lesson, setLesson] = useState(0)

    useEffect(()=>{
        setCounter(c => 1 + (lesson/totalLesson))
    },[lesson])

    const addLesson = () => lesson < totalLesson ? setLesson(l => l + 1) : setLesson(0)

    const [counter, setCounter] = useState(1)
    const [progress, setProgress] = useState(0)


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
    <SafeAreaView edges={['bottom']} style={{ flex:1, backgroundColor: grey}}>
        <ImageBackground source={require('../../assets/images/background.png')} resizeMode="cover" style={styles.background}>
            <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                {/* Progress Bar */}
                <View>
                    <Text style={styles.progressMotive}>Keep going! Your are almost there</Text>
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
                            <CircleProgress counter={counter} lesson={lesson} totalLesson={totalLesson}/>
                        </View>
                    </View>
                    {/* Lesson Progrssion ends here */}

                    {/* Go button */}
                    <View style={mainPageStyles.goButtonPosition}>
                        <View style={[mainPageStyles.goButton, mainPageStyles.goButtonBorder]}>
                            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>addLesson()}>
                                <Text style={mainPageStyles.goButtonText}>GO!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Go button ends here */}
                </View>
                {/* Main Ends here */}

                {/* Traversing Options */}
                <View style={traversingLessonsStyles.container}>             
                    {/* Previous Btn */}
                    <TouchableOpacity style={[mainPageStyles.buttons, traversingLessonsStyles.bg]} onPress={() => decreaseProgress()}>
                        <PreviousBtn style={{marginLeft: 5}}/>
                        <Text style={[traversingLessonsStyles.text, {marginRight: 10}]}>PREVIOUS</Text>
                    </TouchableOpacity>
                    {/* Previous Btn Ends here */}

                    {/* Next Button */}
                    <TouchableOpacity style={[mainPageStyles.buttons, traversingLessonsStyles.bg]} onPress={() => increaseProgress()}>
                        <Text style={[traversingLessonsStyles.text, {marginLeft: 10}]}>NEXT</Text>
                        <NextBtn style={{marginRight: 5}}/>
                    </TouchableOpacity>
                    {/* Next Button Ends Here */}
                </View>
            </View>
        </ImageBackground>
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
        color: commonFontColor,
        fontFamily: 'press-start-2p',
        fontSize: 9,
        marginLeft: 5,
        paddingBottom: 3,
    },
    progressBar:{
        width: '100%',
        height: 16,
        backgroundColor: darkGrey,
    },
    progressBarBorder:{
        borderWidth: 3,
        borderColor: purple,
        borderRadius: 10,
    },
    fillColor:{
        backgroundColor: purple,
        width: 100,
        height: 10
    },
    lessonName:{
        color: commonFontColor,
        textAlign: 'center',
        fontFamily: 'press-start-2p',
        fontSize: 13,
        lineHeight: 20,
    }
})