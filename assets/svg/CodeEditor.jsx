import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const CodeEditor = (props) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <Rect x={3} y={7} width={26} height={1} fill="#000000" />
    <Rect x={2} y={8} width={1} height={16} fill="#000000" />
    <Rect x={3} y={8} width={26} height={1} fill="#5894B5" />
    <Rect x={29} y={8} width={1} height={16} fill="#000000" />
    <Rect x={3} y={9} width={20} height={2} fill="#5894B5" />
    <Rect x={23} y={9} width={1} height={1} fill="#0ED925" />
    <Rect x={24} y={9} width={1} height={2} fill="#5894B5" />
    <Rect x={25} y={9} width={1} height={1} fill="#1FEEF1" />
    <Rect x={26} y={9} width={1} height={2} fill="#5894B5" />
    <Rect x={27} y={9} width={1} height={1} fill="#BE2D0C" />
    <Rect x={28} y={9} width={1} height={2} fill="#5894B5" />
    <Rect x={23} y={10} width={1} height={1} fill="#5894B5" />
    <Rect x={25} y={10} width={1} height={1} fill="#5894B5" />
    <Rect x={27} y={10} width={1} height={1} fill="#5894B5" />
    <Rect x={3} y={11} width={26} height={1} fill="#2F2F2F" />
    <Rect x={3} y={12} width={1} height={12} fill="#2F2F2F" />
    <Rect x={4} y={12} width={1} height={1} fill="#FFFFFF" />
    <Rect x={5} y={12} width={24} height={1} fill="#2F2F2F" />
    <Rect x={4} y={13} width={1} height={1} fill="#2F2F2F" />
    <Rect x={5} y={13} width={1} height={1} fill="#FFFFFF" />
    <Rect x={6} y={13} width={23} height={1} fill="#2F2F2F" />
    <Rect x={4} y={14} width={1} height={1} fill="#FFFFFF" />
    <Rect x={5} y={14} width={2} height={10} fill="#2F2F2F" />
    <Rect x={7} y={14} width={1} height={1} fill="#FFFFFF" />
    <Rect x={8} y={14} width={1} height={10} fill="#2F2F2F" />
    <Rect x={9} y={14} width={1} height={1} fill="#FFFFFF" />
    <Rect x={10} y={14} width={1} height={10} fill="#2F2F2F" />
    <Rect x={11} y={14} width={1} height={1} fill="#FFFFFF" />
    <Rect x={12} y={14} width={17} height={10} fill="#2F2F2F" />
    <Rect x={4} y={15} width={1} height={9} fill="#2F2F2F" />
    <Rect x={7} y={15} width={1} height={9} fill="#2F2F2F" />
    <Rect x={9} y={15} width={1} height={9} fill="#2F2F2F" />
    <Rect x={11} y={15} width={1} height={9} fill="#2F2F2F" />
    <Rect x={3} y={24} width={26} height={1} fill="#000000" />
  </Svg>
);
export default CodeEditor;
