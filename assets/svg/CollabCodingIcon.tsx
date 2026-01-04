import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface MySvgProps {
  size ?: string | number;
  color ?: string;
  isFocused ?: boolean;
  newSize: number; 
}

const CollabCodingIcon = ( iconSize : MySvgProps) => {
  const {size = 44, color, isFocused, newSize} = iconSize;
  return(
  <Svg
    width={isFocused ? newSize : size}
    height={isFocused ? newSize : size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M17.2253 12.9615L16.059 17.0433C16.0199 17.1804 16 17.3224 16 17.465C16 18.3128 16.6872 19 17.535 19H18.5H19.465C20.3128 19 21 18.3128 21 17.465C21 17.3224 20.9801 17.1804 20.941 17.0433L19.7747 12.9615C19.6121 12.3924 19.0919 12 18.5 12C17.9081 12 17.3879 12.3924 17.2253 12.9615Z"
      stroke={color}
      strokeLinecap="round"
    />
    <Path
      d="M16.9775 8.0132C17.5113 6.79161 19.2184 6.723 19.8486 7.89782C20.4193 8.96186 19.6485 10.25 18.441 10.25C17.2895 10.25 16.5164 9.0684 16.9775 8.0132Z"
      stroke={color}
      strokeLinecap="round"
    />
    <Path
      d="M4.22528 12.9615L3.05905 17.0433C3.01986 17.1804 2.99998 17.3224 2.99998 17.465C2.99999 18.3128 3.68724 19 4.535 19H5.5H6.46499C7.31276 19 8.00001 18.3128 8.00001 17.465C8.00002 17.3224 7.98014 17.1804 7.94095 17.0433L6.77474 12.9615C6.61213 12.3924 6.09192 12 5.5 12C4.90809 12 4.38789 12.3924 4.22528 12.9615Z"
      stroke={color}
      strokeLinecap="round"
    />
    <Path
      d="M3.97748 8.0132C4.51132 6.79161 6.21843 6.723 6.84857 7.89782C7.4193 8.96186 6.64848 10.25 5.44105 10.25C4.2895 10.25 3.51636 9.0684 3.97748 8.0132Z"
      stroke={color}
      strokeLinecap="round"
    />
    <Path d="M9 12H14.5" stroke={color} strokeLinecap="round" />
    <Path d="M15 12L13 14.3333" stroke={color} strokeLinecap="round" />
    <Path d="M15 12L13 9.66663" stroke={color} strokeLinecap="round" />
    <Path d="M15 12H9.5" stroke={color} strokeLinecap="round" />
    <Path d="M9 12L11 14.3333" stroke={color} strokeLinecap="round" />
    <Path d="M9 12L11 9.66663" stroke={color} strokeLinecap="round" />
  </Svg>
);
}
export default CollabCodingIcon;
