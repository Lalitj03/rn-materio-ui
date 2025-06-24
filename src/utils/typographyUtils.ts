import type { ThemeContextType } from '../contexts/ThemeProvider';
import type {
  TypographyFontWeight,
  TypographySizes,
  TypographyVariants,
  TypographyWeights,
} from './types/theme';

export interface TypographyStyleResult {
  fontFamily: string;
  fontSize: number;
  fontWeight: TypographyFontWeight;
  lineHeight: number;
  letterSpacing: number;
}

/**
 * Extracts typography styles from theme tokens and applies weight if specified
 * This utility is shared between Typography and TextInput components
 */
export function getTypographyStyles(
  theme: ThemeContextType['theme'],
  variant: TypographyVariants,
  size: TypographySizes,
  weight?: TypographyWeights | null
  // usageType?: TypographyUsageTypes,
  // color?: ThemeColors | null,
  // colorTone: ThemeColorTones,
  // colorValue: ColorTones,
  // colorAlpha: string,
  // gutterBottom?: boolean
): TypographyStyleResult {
  const typographyStyle = theme.typography.tokens[variant][size];

  let { fontFamily, fontSize, lineHeight, tracking } = typographyStyle;

  // Convert pt to px
  fontSize = (fontSize * 96) / 72;
  lineHeight = (lineHeight * 96) / 72;
  tracking = (tracking * 96) / 72;

  // Convert tracking to letter spacing in em units
  let letterSpacing = tracking / fontSize;
  letterSpacing = Math.round(letterSpacing * 1000) / 1000; // round to 3 decimal places

  // Apply weight if specified
  let fontWeight = '400' as TypographyFontWeight;
  if (weight) {
    const { fontFamily: weightFontFamily, fontWeight: weightFontWeight } =
      theme.typography.weightMap[weight];
    fontFamily = weightFontFamily;
    fontWeight = weightFontWeight;
  }

  return {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  };
}
