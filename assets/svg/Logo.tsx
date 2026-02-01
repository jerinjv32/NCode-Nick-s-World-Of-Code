import Svg, { SvgProps, G, Rect, Defs } from "react-native-svg";
const AppLogo = (props: SvgProps) => (
  <Svg
    width={256}
    height={256}
    viewBox="0 0 256 256"
    fill="none"
    {...props}
  >
    <G filter="url(#filter0_d_320_15)">
      <Rect
        y={128.902}
        width={182.294}
        height={179.651}
        rx={20}
        transform="rotate(-45 0 128.902)"
        fill="#212020"
      />
      <G filter="url(#filter1_d_320_15)">
        <Rect
          x={24.8372}
          y={123.717}
          width={139.957}
          height={25.5008}
          transform="rotate(-45 24.8372 123.717)"
          fill="#D9D9D9"
        />
        <Rect
          x={115.837}
          y={211.757}
          width={139.957}
          height={25.5008}
          transform="rotate(-45 115.837 211.757)"
          fill="#D9D9D9"
        />
        <Rect
          x={115.837}
          y={211.793}
          width={169}
          height={26}
          transform="rotate(-90 115.837 211.793)"
          fill="#D9D9D9"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);
export default AppLogo;
