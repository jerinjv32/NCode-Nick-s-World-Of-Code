import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const BackArrow = (props) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    transform="rotate(0)"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M9 8L5 12M5 12L9 16M5 12H19"
        stroke="#ffff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
  </Svg>
);
export default BackArrow;
