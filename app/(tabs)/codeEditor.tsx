import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface MySvgProps {
  size ?: string | number;
  color ?: string;
  isFocused ?: boolean;
  newSize: number; 
}

const CodeEditor = ( iconSize : MySvgProps) => {
  const {size = 44, color, isFocused, newSize} = iconSize;
  return(
  <Svg
    width={isFocused ? newSize : size}
    height={isFocused ? newSize : size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M9 11C10.5 11 10.5302 11 12 11"
      stroke={color}
      strokeLinecap="round"
    />
    <Path d="M6 9L7.5 10L6 11" stroke={color} strokeLinecap="round" />
    <Path
      d="M6 7H12H18C19.1046 7 20 7.89543 20 9V15C20 16.1046 19.1046 17 18 17H6C4.89543 17 4 16.1046 4 15V9C4 7.89543 4.89543 7 6 7Z"
      stroke={color}
    />
  </Svg>
);
}
export default CodeEditor;
