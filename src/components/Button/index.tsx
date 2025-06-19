import {
  type ButtonColors,
  type ButtonSizes,
  type ButtonVariants,
  type ThemeContextType,
  useTheme,
} from '@materio/rn-materio-ui';
import React, { forwardRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';

export type ButtonRounded = 'none' | 'full';

// Define the icon props interface
interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any; // Allow other props that might be needed by various icon components
}

export interface ButtonProps extends RectButtonProps {
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: ButtonRounded;
  startIcon?: React.ReactElement<IconProps>;
  endIcon?: React.ReactElement<IconProps>;
  fullwidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export default forwardRef<typeof RectButton, ButtonProps>(function Button(
  {
    onPress,
    children,
    variant = 'solid',
    color = 'neutral',
    size = 'md',
    rounded,
    startIcon,
    endIcon,
    fullwidth,
    disabled = false,
    loading = false,
    ...props
  }: ButtonProps,
  ref
) {
  const theme = useTheme();
  const styles = useStyles({ theme, fullwidth });
  const sizeMap = {
    xs: { size: 10 },
    sm: { size: 12 },
    md: { size: 16 },
    lg: { size: 20 },
    xl: { size: 24 },
  };
  const iconContainerSize = sizeMap[size].size * (1 + 1 / 4);

  // Use theme.spacing for padding, mapped by button size
  const paddingConfig = {
    xs: { h: theme.spacing.sm, v: theme.spacing.xs }, // For 10px font: pV 4, pH 8
    sm: { h: theme.spacing.md, v: theme.spacing.xs }, // For 12px font: pV 4, pH 12
    md: { h: theme.spacing.lg, v: theme.spacing.sm }, // For 16px font: pV 8, pH 16
    lg: { h: theme.spacing.xl, v: theme.spacing.md }, // For 20px font: pV 12, pH 24
    xl: { h: theme.spacing.xxl, v: theme.spacing.lg }, // For 24px font: pV 16, pH 32
  };
  const paddingHorizontal = paddingConfig[size].h;
  const paddingVertical = paddingConfig[size].v;

  // Use theme.borderRadius, mapped by button size, respecting 'rounded' prop
  const borderRadiusConfig = {
    xs: theme.borderRadius.sm, // 8
    sm: theme.borderRadius.md, // 12
    md: theme.borderRadius.md, // 12
    lg: theme.borderRadius.lg, // 16
    xl: theme.borderRadius.xl, // 24
  };
  const baseBorderRadius = borderRadiusConfig[size];
  const finalBorderRadius =
    rounded === 'none' ? 0 : rounded === 'full' ? 9999 : baseBorderRadius;

  const colorBlock = theme.colorScheme.palette[color];
  const solidPairing = colorBlock.high;
  const softPairing = colorBlock.low;

  let borderColor = solidPairing.main;
  let backgroundColor = solidPairing.main;
  let textColor = solidPairing.contrast;
  // Use theme.borderWidths for outline variant
  const borderWidthValue = variant === 'outline' ? theme.borderWidths.thin : 0;

  if (variant === 'soft') {
    backgroundColor = softPairing.main;
    textColor = softPairing.contrast;
  }

  if (variant === 'outline') {
    backgroundColor = 'transparent';
    borderColor = solidPairing.main;
    textColor = solidPairing.main;
  }

  if (variant === 'ghost') {
    backgroundColor = 'transparent';
    textColor = solidPairing.main;
  }

  // Apply disabled styles if disabled prop is true
  if (disabled) {
    backgroundColor = theme.colorScheme.typography.disabled + '20'; // Using typography.disabled with opacity
    borderColor = theme.colorScheme.typography.disabled;
    textColor = theme.colorScheme.typography.disabled;
  }

  const icStartMargin = paddingHorizontal / 2;
  const icEndMargin = paddingHorizontal / 2;

  return (
    <RectButton
      ref={ref}
      onPress={loading || disabled ? undefined : onPress}
      enabled={!disabled && !loading}
      style={[
        styles.button,
        {
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          borderWidth: borderWidthValue,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderRadius: finalBorderRadius,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {startIcon && (
            <View
              style={[
                styles.iconContainer,
                {
                  width: iconContainerSize,
                  height: iconContainerSize,
                  marginRight: icStartMargin,
                },
              ]}
            >
              {React.cloneElement(startIcon, {
                color: textColor,
                size: sizeMap[size].size,
              })}
            </View>
          )}
          <Text
            style={[
              styles.buttonText,
              { color: textColor, fontSize: sizeMap[size].size },
            ]}
          >
            {children}
          </Text>
          {endIcon && (
            <View
              style={[
                styles.iconContainer,
                {
                  width: iconContainerSize,
                  height: iconContainerSize,
                  marginLeft: icEndMargin,
                },
              ]}
            >
              {React.cloneElement(endIcon, {
                color: textColor,
                size: sizeMap[size].size,
              })}
            </View>
          )}
        </>
      )}
    </RectButton>
  );
});

const useStyles = ({ fullwidth }: ThemeContextType & { fullwidth?: boolean }) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      width: fullwidth ? '100%' : 'auto',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
    },
    iconContainer: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'NotoSansMedium',
    },
  });
