import { useTheme } from 'rn-materio-ui';
import Typography from '../Typography';
import {
  type ButtonVariants,
  type ColorTones,
  type ColorValues,
  type SpacingOptions,
  type ThemeColors,
  type TypographySizes,
  type TypographyUsageTypes,
  type TypographyWeights,
} from 'rn-materio-ui';
import { useState } from 'react';
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
  StyleSheet,
  View,
} from 'react-native';

export interface TextInputProps
  extends Omit<RNTextInputProps, 'color' | 'variant' | 'size'> {
  // Typography-like props
  color?: ThemeColors;
  colorTone?: ColorTones;
  colorValue?: ColorValues;
  colorAlpha?: string;
  usageType?: TypographyUsageTypes;
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: null | TypographyWeights;
  variant?: Extract<ButtonVariants, 'solid' | 'outline'>;
  size?: TypographySizes;

  // TextInput specific props
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  label?: string;
  disabled?: boolean;
  helperText?: string;

  // Spacing and border radius props
  padding?: SpacingOptions;
  borderRadius?: SpacingOptions;
}

export default function TextInput({
  style,
  variant = 'outline',
  size = 'small',
  padding = 'md',
  borderRadius = 'md',
  weight,
  color = 'neutral',
  colorTone = 'low',
  colorValue = 'contrast',
  colorAlpha = 'ff',
  usageType = 'primary',
  align = 'left',
  error = false,
  errorMessage,
  fullWidth = false,
  label,
  disabled = false,
  helperText,
  ...props
}: TextInputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  // Apply typography styling similar to Typography component
  let fontColor = theme.colorScheme.typography[usageType];
  if (color) {
    const colorBlock = theme.colorScheme.palette[color];
    fontColor = colorBlock[colorTone][colorValue] + colorAlpha;
  }

  if (disabled) {
    fontColor = theme.colorScheme.typography.disabled;
  }

  const typographyStyle = theme.typography.tokens.body[size];
  let { fontFamily, fontSize, lineHeight, tracking } = typographyStyle;
  fontSize = (fontSize * 96) / 72; // convert pt to px
  lineHeight = (lineHeight * 96) / 72; // convert pt to px
  tracking = (tracking * 96) / 72; // convert pt to px
  let letterSpacing = tracking / fontSize; // result is in em units
  letterSpacing = Math.round(letterSpacing * 1000) / 1000; // round to 3 decimal places

  // Properly type fontWeight to match React Native's expected values
  let fontWeight = '400' as TypographyWeights; // Default to regular weight

  if (weight) {
    const { fontFamily: weightFontFamily, fontWeight: weightFontWeight } =
      theme.typography.weightMap[weight];
    fontFamily = weightFontFamily;
    // Cast the weight to match React Native's expected values
    fontWeight = weightFontWeight as TypographyWeights;
  }

  // Calculate colors based on state
  const colorBlock = theme.colorScheme.palette[color];
  const softPairing = colorBlock.low;
  const errorColor = theme.colorScheme.typography.error;

  // Border and background colors based on variant and state
  let borderColor = softPairing.contrast + '40'; // Default with opacity
  let backgroundColor = 'transparent';

  if (variant === 'solid') {
    backgroundColor = softPairing.main + '20'; // Light background
    borderColor = 'transparent';
  }

  if (isFocused) {
    borderColor = error
      ? errorColor
      : theme.colorScheme.palette[color].base.main;
  } else if (error) {
    borderColor = errorColor;
  }

  if (disabled) {
    backgroundColor = theme.colorScheme.surface.input + '50';
    borderColor = theme.colorScheme.typography.disabled + '40';
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
            color: fontColor,
            borderColor,
            borderWidth: variant === 'outline' ? 1 : 0,
            borderRadius: theme.borderRadius[borderRadius],
            backgroundColor:
              variant === 'solid' ? backgroundColor : 'transparent',
            padding: theme.spacing[padding],
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
