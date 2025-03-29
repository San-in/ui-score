import Svg, { type SvgProps, Path } from 'react-native-svg';
import type { FC } from 'react';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
} & SvgProps; // Убрал SVGProps<SvgProps>

export const EyeIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = '#ccc',
  ...props
}) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    color={color}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.173 1.173 0 0 1 0-.446c.038-.167.106-.274.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.029.125.029.322 0 .446-.038.167-.106.274-.242.49C20.455 14.495 17.105 19 12 19c-5.106 0-8.455-4.505-9.58-6.287Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
);
