import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { alertRed, commonFontColor, darkGrey, grey, purple } from '../../src/styles/colors'
import Svg, { Circle, ClipPath, Defs, Image } from 'react-native-svg';
import fontStyles from '../../src/styles/fontStyles';
import SettingIcon from '../../assets/svg/SettingIcon';
import UserProfilePicture from '../../assets/svg/UserProfile';
import LogoutBtn from '../../assets/svg/Logout';
import { UseAuthStore } from '../../src/store/authStore';
import { useRouter } from 'expo-router';

const cx = 160;
const cy = 160;
const radius = 143;

const userProfile = () => {
  const logOut = UseAuthStore(state => state.logOut);
  const router = useRouter();

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View>
        <Svg width="45%" height="45%" viewBox='0 0 320 320' style={profileStyle.haloPosition}>
          <Defs>
            <ClipPath id='profile'>
              <Circle cx={cx} cy={cy} r={radius} />
            </ClipPath>
          </Defs>
          <Circle cx={cx} cy={cy} r={radius} fill={'white'} />
          <Image y={40} href={require('../../assets/icons/user_profile.png')} clipPath='url(#profile)' />
          <Circle cx={cx} cy={cy} r={radius} fill={'none'} stroke={darkGrey} strokeWidth={10} />
        </Svg>
        {/* OPtion Panel */}
        <View style={styles.optionPanel}>
          {/* Settings Label */}
          <TouchableOpacity style={lable.position}>
            <SettingIcon width={32} height={32} />
            <Text style={[fontStyles.label, {color: commonFontColor}]}>Settings</Text>
          </TouchableOpacity>

          {/* View Profile Label */}
          <TouchableOpacity style={lable.position} onPress={() => router.push('/myProfile')}>
            <UserProfilePicture width={32} height={32} />
            <Text style={[fontStyles.label, {color: commonFontColor}]}>View Profile</Text>
          </TouchableOpacity>

          {/* Logout Option */}
          <TouchableOpacity style={lable.position} onPress={() => logOut()}>
            <LogoutBtn width={32} height={32} />
            <Text style={[fontStyles.label, {color: alertRed}]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default userProfile;

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: grey,
      flex: 1,
    },
    optionPanel: {
      backgroundColor: darkGrey,
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'center',
      padding: 10,
      marginTop: 10,
      width: '90%',
      borderRadius: 10,
    }
  }
);

const lable = StyleSheet.create(
  {
    position: {
      flexDirection: 'row',
      margin: 5
    }
  }
);

const profileStyle = StyleSheet.create(
  {
    haloPosition: {
      marginTop: 10,
      alignSelf: 'center'
    }
  }
);