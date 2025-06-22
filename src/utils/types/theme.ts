import type { ThemeContextType } from '../../index';

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

export type ColorTone = 'high' | 'base' | 'low';

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

export type SolidOutlineVariants = 'solid' | 'outline';
export type PaperVariants = SolidOutlineVariants;
export type InputVariants = SolidOutlineVariants;

export type ColorValues = 'main' | 'contrast';
export type ColorPairing = Record<ColorValues, string>;
export type ColorBlock = Record<ColorTone, ColorPairing>;
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
  | '2xl'
  | '3xl';
export type BorderRadiusOptions = SpacingOptions | 'full';
export type Spacing = Record<SpacingOptions, number>;
export type BorderRadius = Record<BorderRadiusOptions, number>;
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

export type TypographyAlignment = 'left' | 'center' | 'right' | 'justify';

/** Component Configuration Types */

// Color Resolver - can be a string (theme path) or function
export type ColorResolver =
  | string
  | ((theme: any, colorScheme: string) => string);

// Generic Component Style Object
export interface ComponentStyle {
  // Layout
  padding?:
    | SpacingOptions
    | {
        horizontal?: SpacingOptions;
        vertical?: SpacingOptions;
      };
  margin?: SpacingOptions;
  borderRadius?: SpacingOptions;
  borderWidth?: BorderWidthOptions;
  minHeight?: number;

  // Typography (use sparingly - prefer typography tokens)
  fontSize?: number;
  fontWeight?: TypographyWeights;

  // Colors (theme-aware)
  backgroundColor?: ColorResolver;
  borderColor?: ColorResolver;
  textColor?: ColorResolver;

  // Component-specific properties
  [key: string]: any;
}

// Variant Function - dynamic styles based on theme and color scheme
export type VariantFunction = (
  theme: ThemeContextType['theme'],
  color: ThemeColors
) => ComponentStyle;

// Generic Component Configuration
export interface ComponentConfig<
  TVariants extends string,
  TSizes extends string,
> {
  // Default variant and size
  defaultProps?: {
    variant?: TVariants;
    size?: TSizes;
    color?: ButtonColors; // Most components use ButtonColors
  };

  // Base styles (applied to all variants)
  baseStyle?: ComponentStyle;

  // Size-specific styles
  sizes?: Record<TSizes, ComponentStyle>;

  // Variant-specific styles
  variants?: Record<TVariants, ComponentStyle | VariantFunction>;
}

// Button Component Configuration (now using the generic pattern)
export type ButtonComponentConfig = ComponentConfig<
  ButtonVariants,
  ButtonSizes
>;

// Paper Component Configuration (simple config, no variants needed)
export interface PaperComponentConfig {
  baseStyle: ComponentStyle;
  variants?: Record<PaperVariants, ComponentStyle | VariantFunction>;
}

// Card Component Configuration (simple config, no variants needed)
export interface CardComponentConfig {
  baseStyle: ComponentStyle;
  variants?: Record<PaperVariants, ComponentStyle | VariantFunction>;
}

// Chip Component Configuration (uses Button variants and sizes)
export type ChipComponentConfig = ComponentConfig<ButtonVariants, ButtonSizes>;

// TextInput Component Configuration (simple config with size variants)
export type TextInputComponentConfig = ComponentConfig<
  InputVariants,
  TypographySizes
>;

// IconButton Component Configuration (uses Button variants and sizes)
export type IconButtonComponentConfig = ComponentConfig<
  ButtonVariants,
  ButtonSizes
>;

// Menu Component Configuration (simple config with size variants)
export type MenuComponentConfig = ComponentConfig<never, ButtonSizes>;

// Popover Component Configuration (simple config, no variants)
export interface PopoverComponentConfig {
  baseStyle: ComponentStyle;
}

// Backdrop Component Configuration (simple config, no variants)
export interface BackdropComponentConfig {
  baseStyle: ComponentStyle;
}

// Divider Component Configuration (simple config, no variants)
export interface DividerComponentConfig {
  baseStyle: ComponentStyle;
}

// Typography Component Default Props
export interface TypographyComponentDefaultProps {
  variant?: TypographyVariants;
  size?: TypographySizes;
  weight?: TypographyWeights | null;
  color?: ThemeColors | null; // Theme color name
  colorTone?: ColorTone;
  colorValue?: ColorValues;
  colorAlpha?: string; // Hex alpha value to append to color
  align?: TypographyAlignment; // Text alignment
  usageType?: TypographyUsageTypes; // Applies typography color based on usage if color is not provided
  gutterBottom?: boolean; // Adds bottom margin
}

// Typography Component Configuration (uses existing typography tokens - minimal config)
export interface TypographyComponentConfig {
  defaultProps?: TypographyComponentDefaultProps;
  baseStyle?: ComponentStyle;
}

// Combined Component Configuration
export type ComponentsConfig = {
  Button: ButtonComponentConfig;
  Paper: PaperComponentConfig;
  Card: CardComponentConfig;
  Chip: ChipComponentConfig;
  TextInput: TextInputComponentConfig;
  IconButton: IconButtonComponentConfig;
  Menu: MenuComponentConfig;
  Popover: PopoverComponentConfig;
  Backdrop: BackdropComponentConfig;
  Divider: DividerComponentConfig;
  Typography: TypographyComponentConfig;
};

export interface Theme {
  colorScheme: ColorScheme;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidths: BorderWidths;
  components: ComponentsConfig;
}
