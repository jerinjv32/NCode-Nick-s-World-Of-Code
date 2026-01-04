import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface MySvgProps {
  size ?: string | number;
  color ?: string;
  isFocused ?: boolean;
  newSize: number; 
}

const ProblemTrail = ( iconSize : MySvgProps) => {
  const {size = 44, color, isFocused, newSize} = iconSize;
  return(
    <Svg
    width={isFocused ? newSize : size}
    height={isFocused ? newSize : size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path d="M11.5 15L10 18M12.5 15L14 18" stroke={color} />
    <Path
      d="M16.6042 18H7.43352C6.98466 18 6.79915 17.4248 7.16345 17.1625L8.3269 16.3251L9.6443 15.3768C9.98464 15.1318 10.3934 15 10.8127 15H13.3333C13.7661 15 14.1871 15.1404 14.5333 15.4L15.7668 16.3251L16.8834 17.1625C17.2411 17.4308 17.0513 18 16.6042 18Z"
      stroke={color}
    />
    <Path
      d="M11.7236 12.5528C11.8375 12.325 12.1625 12.325 12.2764 12.5528C12.3791 12.7583 12.2297 13 12 13C11.7703 13 11.6209 12.7583 11.7236 12.5528Z"
      stroke={color}
    />
    <Path
      d="M13.6345 6.34L12.539 10.3568C12.5135 10.4507 12.4638 10.5362 12.3951 10.6049C12.1769 10.8231 11.8231 10.8231 11.6049 10.6049C11.5362 10.5362 11.4865 10.4507 11.461 10.3569L10.3655 6.34001C10.153 5.56085 10.52 4.74002 11.2423 4.37884C11.7193 4.14036 12.2807 4.14036 12.7577 4.37884C13.48 4.74002 13.847 5.56085 13.6345 6.34Z"
      stroke={color}
    />
  </Svg>
);
}
export default ProblemTrail;
