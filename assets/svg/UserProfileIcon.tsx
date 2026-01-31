import Svg, { Circle, ClipPath, Defs, Image } from "react-native-svg";
import { darkGrey, grey, purple } from "../../src/styles/colors";
import { SvgProps } from "react-native-svg";

type Unit = SvgProps & {
    width?: string | number;
    height?: string | number;
}
export default function UserProfileIcon({width, height, ...props} : Unit){
    return(
        <Svg width={width} height={height} viewBox="0 0 60 60" {...props}>
            <Defs>
                <ClipPath id="halo">
                    <Circle cx={30} cy={30} r={25} strokeWidth={4}/>
                </ClipPath>
            </Defs>
            <Circle cx={30} cy={30} r={25} fill={'white'}/>
            <Image
                clipPath = 'url(#halo)'
                width={50}
                height={50}
                href={require('../../assets/icons/user_profile.png')}
                y={10}
                x={5}
            />
            <Circle cx={30} cy={30} r={25} stroke={grey} fill={'none'} strokeWidth={3}/>
        </Svg>
    );
}