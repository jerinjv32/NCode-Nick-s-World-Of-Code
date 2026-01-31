import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { bannerHeaderBg, commonFontColor, darkGrey, grey, lightPurple, mainBgColor, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { LEVEL1DATA } from '../../src/data/levels'
import { useRouter } from 'expo-router'
import chatBot from './chatBot'

type ItemProps = {
    lesson?: string,
    level: string,
    chapter?: string,
    type: string,
    side: string
}

const ChooseStyle = ({ lesson, level, type, side, chapter }: ItemProps) => {
    const router = useRouter();
    if (type == 'question') {
        return (
            <View style={[styles.shutterQuestions, side == 'left' ? styles.onRight : styles.onLeft]}>
                <View style={styles.chapter}>
                    <Text style={[fontStyle.normal, {color: commonFontColor}]}>{chapter}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => router.push('/problem_trail')}
                    style={[
                        styles.box,
                        {
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    ]}>
                    <Text style={[styles.level, fontStyle.header1,]}>{lesson}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if (type == 'banner') {
        return (
            <View style={styles.shutter}>
                <View style={[styles.banner]}>
                    <Text style={[styles.bannerText, fontStyle.header1]}>LEVEL {level}</Text>
                    <View style={styles.bannerUnderLine} />
                </View>
            </View>
        )
    }
}

const Item = ({ lesson, level, type, side, chapter}: ItemProps) => (
    <View style={styles.msgContainer}>
        <ChooseStyle lesson={lesson} level={level} type={type} side={side} chapter={chapter}/>
    </View>
)
const Home = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: mainBgColor }}>
            <FlatList
                data={LEVEL1DATA}
                renderItem={({ item }) => <Item lesson={item.lesson} level={item.level} type={item.type} side={item.side} chapter={item.title} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    box: {
        backgroundColor: purple,
        margin: 10,
        height: 80,
        width: 80,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: lightPurple,
        elevation: 5,
    },
    level: {
        color: commonFontColor
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
        backgroundColor: purple,
        height: 15,
        width: 300,
        marginTop: 10,
        borderRadius: 10,
    },
    msgContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    shutter: {
        backgroundColor: darkGrey,
        width: '100%'
    },
    shutterQuestions: {
        borderColor: darkGrey,
        borderRadius: 13,
        borderWidth: 3,
        margin: 5,
        width: '70%',
    },
    onLeft:{
        flexDirection: 'row-reverse'
    },
    onRight:{
        flexDirection: 'row'
    },
    chapter:{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 10,
    }
})