import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { darkGrey, grey, purple } from '../../src/styles/colors'
import Svg, { Circle, ClipPath, Defs, Image } from 'react-native-svg';
import fontStyles from '../../src/styles/fontStyles';
import SettingIcon from '../../assets/svg/SettingIcon';
import UserProfilePicture from '../../assets/svg/UserProfile';
import ToggleBtn from '../../assets/svg/ToggleBtn';
import LogoutBtn from '../../assets/svg/Logout';

const cx = 160;
const cy = 160;
const radius = 143;

const userProfile = () => {
  return (
    <SafeAreaView edges={['bottom']}style={styles.container}>
      <View>
        <Svg width="45%" height="45%" viewBox='0 0 320 320' style={profileStyle.haloPosition}>
          <Defs> 
            <ClipPath id='profile'>
              <Circle cx={cx} cy={cy} r={radius}/>
            </ClipPath>
          </Defs>
          <Circle cx={cx} cy={cy} r={radius} fill={'white'}/>
          <Image y={40} href={require('../../assets/icons/user_profile.png')} clipPath='url(#profile)'/>
          <Circle cx={cx} cy={cy} r={radius} fill={'none'} stroke={purple} strokeWidth={10}/>
        </Svg>
        <Text style={[fontStyles.header1, {alignSelf: 'center'}]}>Username</Text>

        {/* OPtion Panel */}
        <View style={styles.optionPanel}>
          {/* Settings Label */}
          <TouchableOpacity style={lable.position}>
            <SettingIcon width={32} height={32}/>
            <Text style={fontStyles.label}>Settings</Text>
          </TouchableOpacity>

          {/* View Profile Label */}
          <TouchableOpacity style={lable.position}>
            <UserProfilePicture width={32} height={32}/>
            <Text style={fontStyles.label}>View Profile</Text>
          </TouchableOpacity>

          {/* Lights modes Label */}
          <TouchableOpacity style={lable.position}>
            <ToggleBtn width={32} height={32}/>
            <Text style={fontStyles.label}>Light Modes</Text>
          </TouchableOpacity>

          {/* Logout Option */}
          <TouchableOpacity style={lable.position}>
            <LogoutBtn width={32} height={32}/>
            <Text style={fontStyles.label}>Logout</Text>
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
      optionPanel:{
        backgroundColor: darkGrey,
        flex: 1,
        alignSelf: 'center',
        marginHorizontal: 10,
        padding: 10,
        marginTop: 10,
        width: '90%',
        borderRadius: 10,
      }
  }
);

const lable = StyleSheet.create(
  {
    position:{
      flexDirection: 'row',
      margin: 5
    }
  }
);

const profileStyle = StyleSheet.create(
  {
    haloPosition:{
      marginTop: 10,
      alignSelf: 'center'
    }
  }
);