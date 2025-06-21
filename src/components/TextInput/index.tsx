import {
  useTheme,
  type ColorTones,
  type ColorValues,
  type SolidOutlineVariants,
  type ThemeColors,
  type TypographySizes,
  type TypographyUsageTypes,
  type TypographyVariants,
  type TypographyWeights,
} from '@materio/rn-materio-ui';
import { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  type TextInputProps as RNTextInputProps,
} from 'react-native';
import {
  useComponentDefaults,
  useComponentStyle,
} from '../../hooks/useComponentStyle';
import { getTypographyStyles } from '../../utils/typographyUtils';
import Typography from '../Typography';

export interface TextInputProps
  extends Omit<RNTextInputProps, 'color' | 'variant' | 'size'> {
  // Typography alignment with Typography component
  variant?: TypographyVariants;
  size?: TypographySizes;
  weight?: null | TypographyWeights;
  color?: ThemeColors;
  colorTone?: ColorTones;
  colorValue?: ColorValues;
  /** alpha value will be appended to the color Eg: "#000000" + "60" */
  colorAlpha?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  usageType?: TypographyUsageTypes;

  // TextInput specific props
  outlined?: boolean; // Replaces variant - true for outline, false for solid
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  label?: string;
  disabled?: boolean;
  helperText?: string;
}

// TODO: Refactor to clearly separate typography variant from visual variant (solid/outline) and improve code clarity.
export default function TextInput({
  style,
  variant,
  size,
  weight,
  color,
  colorTone,
  colorValue,
  colorAlpha,
  usageType,
  align = 'left',
  outlined = false,
  error = false,
  errorMessage,
  fullWidth = false,
  label,
  disabled = false,
  helperText,
  ...props
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  // Get default props from theme - using string literals for the generic types
  const defaultProps = useComponentDefaults<
    SolidOutlineVariants,
    TypographySizes
  >('TextInput');

  // Apply defaults with prop overrides - Typography aligned
  const finalVariant = variant ?? defaultProps.variant ?? 'body'; // Default to 'body' typography variant
  const finalSize = size ?? defaultProps.size ?? 'medium';
  const finalWeight = weight ?? null;
  const finalUsageType = usageType ?? 'primary';
  const finalColor = color ?? null;
  const finalColorTone = colorTone ?? 'base';
  const finalColorValue = colorValue ?? 'main';
  const finalColorAlpha = colorAlpha ?? '';

  // Determine the visual variant (solid/outline) from the outlined prop
  const visualVariant = outlined ? 'outline' : 'solid';

  // Use the new component style system for layout and colors (still using the old component config)
  const componentStyle = useComponentStyle(
    'TextInput',
    visualVariant,
    finalSize,
    'neutral' // Use neutral as the base color for input styling
  );

  // Use Typography styles for font styling
  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
    getTypographyStyles(
      theme,
      finalVariant as TypographyVariants,
      finalSize as TypographySizes,
      finalWeight
    );

  // Calculate text color using Typography logic
  let textColor =
    theme.colorScheme.typography[finalUsageType as TypographyUsageTypes];
  if (finalColor) {
    const colorBlock = theme.colorScheme.palette[finalColor];
    textColor =
      colorBlock[finalColorTone as ColorTones][finalColorValue as ColorValues] +
      finalColorAlpha;
  }

  // Calculate state-based colors for input styling
  const errorColor = theme.colorScheme.typography.error;
  let borderColor = componentStyle.borderColor;
  let backgroundColor = componentStyle.backgroundColor;

  if (isFocused) {
    borderColor = error
      ? errorColor
      : finalColor
        ? theme.colorScheme.palette[finalColor].base.main
        : theme.colorScheme.palette.neutral.base.main;
  } else if (error) {
    borderColor = errorColor;
  }

  if (disabled) {
    backgroundColor = theme.colorScheme.surface.input + '50';
    borderColor = theme.colorScheme.typography.disabled + '40';
    textColor = theme.colorScheme.typography.disabled;
  }

  return (
    <View style={fullWidth ? styles.fullWidth : styles.container}>
      {label && (
        <Typography
          variant="label"
          size="small"
          usageType={error ? 'error' : disabled ? 'disabled' : 'primary'}
          style={styles.label}
        >
          {label}
        </Typography>
      )}

      <RNTextInput
        style={[
          styles.input,
          {
            textAlign: align,
            fontFamily,
            fontSize,
            fontWeight,
            lineHeight,
            letterSpacing,
            color: textColor,
            borderColor,
            borderWidth: outlined ? componentStyle.borderWidth : 0,
            borderRadius: componentStyle.borderRadius,
            backgroundColor: !outlined ? backgroundColor : 'transparent',
            paddingHorizontal: componentStyle.paddingHorizontal,
            paddingVertical: componentStyle.paddingVertical,
            opacity: disabled ? 0.7 : 1,
          },
          style,
        ]}
        placeholderTextColor={theme.colorScheme.typography.secondary + '99'}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus && props.onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur && props.onBlur(e);
        }}
        {...props}
      />

      {error && errorMessage ? (
        <Typography
          variant="caption"
          size="small"
          usageType="error"
          style={styles.helperText}
        >
          {errorMessage}
        </Typography>
      ) : helperText ? (
        <Typography
          variant="caption"
          size="small"
          usageType="secondary"
          style={styles.helperText}
        >
          {helperText}
        </Typography>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
  },
  input: {
    minHeight: 40,
  },
  helperText: {
    marginTop: 4,
  },
  label: {
    marginBottom: 4,
  },
  fullWidth: {
    width: '100%',
  },
});
