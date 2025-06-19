/** Theme Colors */
export type ThemeColors =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'inactive';

export type ColorTones = 'high' | 'base' | 'low';

export type ThemeColorTones = 'high' | 'base' | 'low';
export type ButtonColors =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';
export type ButtonVariants = 'solid' | 'soft' | 'outline' | 'ghost';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type PaperVariants = 'solid' | 'outline';

export type ColorValues = 'main' | 'contrast';
export type ColorPairing = Record<ColorValues, string>;
export type ColorBlock = Record<ThemeColorTones, ColorPairing>;
export type ColorPalette = Record<ThemeColors, ColorBlock>;

export type SurfaceColors = {
  background: string;
  overlay: string;
  divider: string;
  paper: string;
  input: string;
};

export type TypographyUsageTypes =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'hint'
  | 'link'
  | 'error';

export type TypographyColors = Record<TypographyUsageTypes, string>;

export type ColorScheme = Record<
  'light' | 'dark',
  {
    palette: ColorPalette;
    paper: { base: { main: string } };
    surface: SurfaceColors;
    typography: TypographyColors;
  }
>;

export type TypographyVariants =
  | 'display'
  | 'headline'
  | 'title'
  | 'body'
  | 'label'
  | 'caption';
export type TypographySizes = 'large' | 'medium' | 'small';
export type TypographyWeights =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold';
export type TypographyTokenStyle = {
  fontFamily: string;
  fontWeight: TypographyWeights;
  fontSize: number;
  tracking: number;
  lineHeight: number;
};
export type TypographyFontWeight = '300' | '400' | '500' | '600' | '700';
export type TypographyWeightStyle = {
  fontFamily: string;
  fontWeight: TypographyFontWeight;
};
export type TypographyWeightMap = Record<
  TypographyWeights,
  TypographyWeightStyle
>;

export type TypographyTokens = Record<
  TypographyVariants,
  Record<TypographySizes, TypographyTokenStyle>
>;

export type SpacingOptions =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';
export type Spacing = Record<SpacingOptions, number>;
export type BorderRadius = Record<SpacingOptions, number>;
export type BorderWidthOptions =
  | 'none'
  | 'hairline'
  | 'thin'
  | 'medium'
  | 'thick';
export type BorderWidths = Record<BorderWidthOptions, number>;
export type Typography = {
  tokens: TypographyTokens;
  weightMap: TypographyWeightMap;
};

export interface Theme {
  colorScheme: ColorScheme;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidths: BorderWidths;
}
