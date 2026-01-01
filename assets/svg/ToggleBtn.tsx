import Svg, { SvgProps, Path } from "react-native-svg";
const ToggleBtn = (props: SvgProps) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4722 8H16C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16H12.4722C13.4223 14.9385 14 13.5367 14 12C14 10.4633 13.4223 9.06151 12.4722 8ZM8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16C10.2091 16 12 14.2091 12 12C12 9.79086 10.2091 8 8 8ZM8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6Z"
      fill="#ffff"
    />
  </Svg>
);
export default ToggleBtn;
