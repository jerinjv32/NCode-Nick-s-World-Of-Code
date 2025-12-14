import Svg, { Rect } from "react-native-svg";
const Arrow = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <Rect x={10} y={4} width={1} height={1} fill="#FFFFFF" />
    <Rect x={11} y={5} width={1} height={1} fill="#FFFFFF" />
    <Rect x={12} y={6} width={1} height={3} fill="#FFFFFF" />
    <Rect x={4} y={7} width={8} height={1} fill="#FFFFFF" />
    <Rect x={13} y={7} width={1} height={1} fill="#FFFFFF" />
    <Rect x={11} y={9} width={1} height={1} fill="#FFFFFF" />
    <Rect x={10} y={10} width={1} height={1} fill="#FFFFFF" />
  </Svg>
);
export default Arrow;
