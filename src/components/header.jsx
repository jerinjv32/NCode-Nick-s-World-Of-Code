import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Link, usePathname } from 'expo-router'
import Arrow from '../../assets/svg/arrow'
import { useState } from 'react'

const header = () => {
    const path = usePathname()
    let displayArrow = 'none'

    let title
    switch(path){
        case '/home':
            title = 'Problem Trail'
            break
        case '/chatBot':
            title = 'Chat Bot'
            break
        case '/collabCoding':
            title = 'Collab Coding'
            break
        case '/codeEditor':
            title = 'Code Editor'
            displayArrow = 'flex'
            break
    }

    return (
            <View style={styles.header}>
                <Link href={'/home'}>
                    <Arrow width={40} height={40} transform="rotate(180,0,0)" 
                    style={{display: displayArrow,}}/>
                </Link>
                <Text style={styles.headerTitle}>{title}</Text>
                <Image source={require('../../assets/icons/user_profile.png')} style={[styles.profile,{height: 40, width: 40}]}/>
            </View>
  )
}

export default header

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor: '#282828',
        height: 65,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    headerTitle:{
        fontSize: 10,
        fontFamily: 'press-start-2p',
        color: 'white'        
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