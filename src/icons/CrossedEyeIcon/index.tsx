import Svg, { type SvgProps, Path, Circle } from 'react-native-svg';
import type { FC } from 'react';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
} & SvgProps; // Убрал SVGProps<SvgProps>

export const CrossedEyeIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = '#ccc',
  ...props
}) => (
  <Svg
    fill="none"
    stroke={color}
    strokeLinecap="square"
    aria-labelledby="eyeCrossedIconTitle"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    color={color}
    strokeWidth={2}
    {...props}
  >
    <Path d="M22 12s-3 6-10 6-10-6-10-6 3-6 10-6 10 6 10 6Z" />
    <Circle cx={12} cy={12} r={3} />
    <Path d="M3 21 20 4" />
  </Svg>
);
