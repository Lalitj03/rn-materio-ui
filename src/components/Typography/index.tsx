import { Text, type TextProps } from 'react-native';
import { useComponentDefaults } from '../../hooks/useComponentStyle';
import {
  type ColorTone,
  type ColorValues,
  type ThemeColors,
  type TypographyComponentDefaultProps,
  type TypographySizes,
  type TypographyUsageTypes,
  type TypographyVariants,
  type TypographyWeights,
  useTheme,
} from '../../index';
import { getTypographyStyles } from '../../utils/typographyUtils';

export interface ColoredTypographyProps {
  color?: ThemeColors;
  colorTone?: ColorTone;
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
  variant,
  size,
  weight,
  color,
  colorTone,
  colorValue,
  colorAlpha,
  usageType,
  align,
  gutterBottom,
  children,
  ...props
}: TypographyProps) {
  const theme = useTheme();

  const defaultProps = useComponentDefaults<
    TypographyVariants,
    TypographySizes
  >('Typography') as TypographyComponentDefaultProps;

  const finalVariant = variant ?? defaultProps.variant;
  const finalSize = size ?? defaultProps.size;
  const finalUsageType = usageType ?? defaultProps.usageType;
  const finalWeight = weight ?? defaultProps.weight ?? null;
  const finalAlign = align ?? defaultProps.align;
  const finalGutterBottom = gutterBottom ?? defaultProps.gutterBottom ?? false;
  const finalColor = color ?? defaultProps.color ?? null;
  const finalColorTone = colorTone ?? defaultProps.colorTone;
  const finalColorValue = colorValue ?? defaultProps.colorValue;
  const finalColorAlpha = colorAlpha ?? defaultProps.colorAlpha;

  let fontColor =
    theme.colorScheme.typography[finalUsageType as TypographyUsageTypes];
  if (finalColor) {
    const colorBlock = theme.colorScheme.palette[finalColor];
    fontColor =
      colorBlock[finalColorTone as ColorTone][finalColorValue as ColorValues] +
      finalColorAlpha;
  }

  // Use the shared typography utility function
  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
    getTypographyStyles(
      theme,
      finalVariant as TypographyVariants,
      finalSize as TypographySizes,
      finalWeight
    );

  return (
    <Text
      style={[
        {
          textAlign: finalAlign,
          fontFamily,
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing,
          color: fontColor,
          marginBottom: finalGutterBottom ? theme.spacing.md : 0,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
