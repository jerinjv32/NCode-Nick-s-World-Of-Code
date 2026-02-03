import { StyleSheet, FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonFontColor, darkGrey, grey, mainBgColor, purple } from '../../src/styles/colors'
import fontStyle from '../../src/styles/fontStyles'
import { LEVEL1DATA } from '../../src/data/levels'
import AlertBox from '../../src/components/ProblemTraileNavigationModal'
import { useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import UnlockedLesson from '../../src/components/UnlockedLesson'
import LockedLesson from '../../src/components/lockedLesson'
import CompletedLesson from '../../src/components/CompletedLesson'
import { useState } from 'react'
import ProblemTrailNavigationModal from '../../src/components/ProblemTraileNavigationModal'
import LockedLessonAlertBox from '../../src/components/LockeLessonAlertModal'

type ItemProps = {
    lesson?: string,
    level: string,
    title?: string,
    type: string,
    side: string,
    unlocked?: boolean,
    completed?: boolean
}

interface MyCallback {
    (currentLesson: number) : void
}
const ChooseStyle = ({ lesson, level, type, side, title, unlocked, completed }: ItemProps) => {
    if (type == 'question') {
        if (completed) {
            return (
                <CompletedLesson lesson={lesson} side={side} title={title} />
            );
        }
        else if (!unlocked) {
            return (
                <LockedLesson lesson={lesson} side={side} title={title} />
            );
        }
        else {
            return (
                <UnlockedLesson lesson={lesson} side={side} title={title} />
            );
        }
    }

    else if (type == 'banner') {
        return (
            <View style={styles.shutter}>
                <View style={[styles.banner]}>
                    <Text style={[styles.bannerText, fontStyle.header1]}>LEVEL {level}</Text>
                    <View style={styles.bannerUnderLine} />
                </View>
            </View>
        );
    }
}

const Item = ({ lesson, level, type, side, title, unlocked, completed }: ItemProps) => (
    <View style={styles.msgContainer}>
        <ChooseStyle
            lesson={lesson}
            level={level} type={type}
            side={side} title={title}
            unlocked={unlocked}
            completed={completed}
        />
    </View>
);

const Home = () => {
    const [lessonData, setLessonData] = useState([])
    useEffect(() => {
        function lessonDisplay(currentLesson: number) {
            setLessonData(LEVEL1DATA.map((level) => ({
                ...level,
                unlocked: level.lesson == String(currentLesson) ? true : false,
                completed: Number(level.lesson) < currentLesson ? true : false
            })));
        }

        async function getProgression(callBack: MyCallback) {
            const { data, error } = await supabase
                .from('lesson_progression')
                .select('*');
            if (error) {
                console.log('error:', error);
            }
            callBack(data[0].next_lesson);
        }

        getProgression(lessonDisplay);

    }, []);
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: mainBgColor }}>
            <ProblemTrailNavigationModal />
            <LockedLessonAlertBox />
            <FlatList
                data={lessonData}
                renderItem={({ item }) =>
                    <Item lesson={item.lesson}
                        level={item.level}
                        type={item.type}
                        side={item.side}
                        title={item.title}
                        unlocked={item.unlocked}
                        completed={item.completed}
                    />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Home

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
});