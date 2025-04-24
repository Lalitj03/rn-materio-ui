import {
    useTheme, type ColorTones,
    type ColorValues,
    type ThemeColors,
    type TypographyFontWeight,
    type TypographySizes,
    type TypographyUsageTypes,
    type TypographyVariants,
    type TypographyWeights
} from '@materio/rn-materio-ui';
import { Text, type TextProps } from 'react-native';

export interface ColoredTypographyProps {
  color?: ThemeColors;
  colorTone?: ColorTones;
  colorValue?: ColorValues;
  /** alpha value will be appended to the color Eg: "#000000" + "60" */
  colorAlpha?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
}

export interface UsageTypographyProps {
  usageType?: TypographyUsageTypes;
}

export interface TypographyProps
  extends ColoredTypographyProps,
    UsageTypographyProps,
    TextProps {
  weight?: null | TypographyWeights;
  variant?: TypographyVariants;
  size?: TypographySizes;
  /** Adds bottom margin to the typography component */
  gutterBottom?: boolean;
}

export default function Typography({
  style,
  variant = 'body',
  size = 'small',
  weight,
  color,
  colorTone = 'low',
  colorValue = 'contrast',
  colorAlpha = 'ff',
  usageType = 'primary',
  align = 'left',
  gutterBottom = false,
  children,
  ...props
}: TypographyProps) {
  const theme = useTheme();
  let fontColor = theme.colorScheme.typography[usageType];
  if (color) {
    const colorBlock = theme.colorScheme.palette[color];
    fontColor = colorBlock[colorTone][colorValue] + colorAlpha;
  }

  const typographyStyle = theme.typography.tokens[variant][size];
  let { fontFamily, fontSize, lineHeight, tracking } = typographyStyle;
  fontSize = (fontSize * 96) / 72; //convert pt to px
  lineHeight = (lineHeight * 96) / 72; //convert pt to px
  tracking = (tracking * 96) / 72; //convert pt to px
  let letterSpacing = tracking / fontSize; //result is in em units
  letterSpacing = Math.round(letterSpacing * 1000) / 1000; //round to 3 decimal places

  let fontWeight = '400' as TypographyFontWeight;
  if (weight) {
    const { fontFamily: weightFontFamily, fontWeight: weightFontWeight } =
      theme.typography.weightMap[weight];
    fontFamily = weightFontFamily;
    fontWeight = weightFontWeight;
  }

  return (
    <Text
      style={[
        {
          textAlign: align,
          fontFamily,
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing: letterSpacing,
          color: fontColor,
          marginBottom: gutterBottom ? theme.spacing.md : 0,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
