import Svg, { Rect, Path } from "react-native-svg";

interface MySvgProps {
  size ?: string | number;
  color ?: string;
  isFocused ?: boolean;
  newSize: number; 
}

const ChatBot = ( iconSize : MySvgProps) => {
  const {size = 44, color, isFocused, newSize} = iconSize;
  return(
    <Svg
      width={isFocused ? newSize : size}
      height={isFocused ? newSize : size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M16 15H8C6.89543 15 6 14.1046 6 13V8.97143C6 8.44232 6.21685 7.93633 6.6 7.57143L6.62067 7.55175C6.99255 7.19757 7.48645 7 8 7H12H16C16.5136 7 17.0074 7.19755 17.3793 7.55172C17.7757 7.92921 18 8.45265 18 9V13C18 14.1046 17.1046 15 16 15Z"
        stroke={color}
      />
      <Rect
        x={8.89996}
        y={15.2142}
        width={6.2}
        height={3.28571}
        rx={1.5}
        stroke={color}
      />
      <Path
        d="M8.72361 10.0528C8.83749 9.82503 9.16251 9.82503 9.27639 10.0528C9.37913 10.2583 9.22972 10.5 9 10.5C8.77028 10.5 8.62087 10.2583 8.72361 10.0528Z"
        fill={color}
        stroke={color}
      />
      <Path
        d="M14.7236 10.0528C14.8375 9.82503 15.1625 9.82503 15.2764 10.0528C15.3791 10.2583 15.2297 10.5 15 10.5C14.7703 10.5 14.6209 10.2583 14.7236 10.0528Z"
        fill={color}
        stroke={color}
      />
      <Path d="M12 7V5" stroke={color} />
      <Path
        d="M12.1464 5H11.8536C11.6583 5 11.5 4.84171 11.5 4.64645C11.5 4.55268 11.5372 4.46275 11.6036 4.39645L11.6464 4.35355C11.8417 4.15829 12.1583 4.15829 12.3536 4.35355L12.3964 4.39645C12.4628 4.46275 12.5 4.55268 12.5 4.64645C12.5 4.84171 12.3417 5 12.1464 5Z"
        stroke={color}
      />
      <Path
        d="M11 12L11.2929 12.2929C11.6834 12.6834 12.3166 12.6834 12.7071 12.2929L13 12"
        stroke={color}
        strokeLinecap="round"
      />
      <Path
        d="M8.05279 17.2764C7.82503 17.1625 7.82503 16.8375 8.05279 16.7236C8.25825 16.6209 8.5 16.7703 8.5 17C8.5 17.2297 8.25825 17.3791 8.05279 17.2764Z"
        stroke={color}
      />
      <Path
        d="M15.9472 16.7236C16.175 16.8375 16.175 17.1625 15.9472 17.2764C15.7417 17.3791 15.5 17.2297 15.5 17C15.5 16.7703 15.7417 16.6209 15.9472 16.7236Z"
        stroke={color}
      />
  </Svg>
  )
};
export default ChatBot;