import React, { forwardRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';
import { useTheme, type ThemeContextType } from '../../contexts/ThemeProvider';
import {
  useComponentDefaults,
  useComponentStyle,
} from '../../hooks/useComponentStyle';
import {
  type ButtonColors,
  type ButtonSizes,
  type ButtonVariants,
} from '../../utils/types/theme';

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
    variant,
    color,
    size,
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

  // Get default props from theme
  const defaultProps = useComponentDefaults<ButtonVariants, ButtonSizes>(
    'Button'
  );

  // Apply defaults with prop overrides
  const finalVariant = variant ?? defaultProps.variant ?? 'solid';
  const finalColor = color ?? defaultProps.color ?? 'neutral';
  const finalSize = size ?? defaultProps.size ?? 'md';

  // Use the new component style system
  const componentStyle = useComponentStyle(
    'Button',
    finalVariant,
    finalSize,
    finalColor
  );

  // Handle rounded prop override
  const finalBorderRadius =
    rounded === 'none'
      ? 0
      : rounded === 'full'
        ? 9999
        : componentStyle.borderRadius;

  // Calculate icon size based on font size
  const iconSize = componentStyle.fontSize * 0.875; // Slightly smaller than font size
  const iconContainerSize = iconSize * 1.25; // 25% larger than icon for proper spacing

  // Apply disabled styles if disabled prop is true
  let finalBackgroundColor = componentStyle.backgroundColor;
  let finalBorderColor = componentStyle.borderColor;
  let finalTextColor = componentStyle.color;

  if (disabled) {
    finalBackgroundColor = theme.colorScheme.typography.disabled + '20'; // Using typography.disabled with opacity
    finalBorderColor = theme.colorScheme.typography.disabled;
    finalTextColor = theme.colorScheme.typography.disabled;
  }

  return (
    <RectButton
      ref={ref}
      onPress={loading || disabled ? undefined : onPress}
      enabled={!disabled && !loading}
      style={[
        styles.button,
        {
          paddingHorizontal: componentStyle.paddingHorizontal,
          paddingVertical: componentStyle.paddingVertical,
          borderWidth: componentStyle.borderWidth,
          backgroundColor: finalBackgroundColor,
          borderColor: finalBorderColor,
          borderRadius: finalBorderRadius,
          minHeight: componentStyle.minHeight,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={finalTextColor} />
      ) : (
        <>
          {startIcon && (
            <View
              style={[
                styles.iconContainer,
                {
                  width: iconContainerSize,
                  height: iconContainerSize,
                  marginRight: theme.spacing.xs,
                },
              ]}
            >
              {React.cloneElement(startIcon, {
                color: finalTextColor,
                size: iconSize,
              })}
            </View>
          )}
          <Text
            style={[
              styles.buttonText,
              {
                fontFamily: componentStyle.fontFamily,
                fontSize: componentStyle.fontSize,
                color: finalTextColor,
              },
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
                  marginLeft: theme.spacing.xs,
                },
              ]}
            >
              {React.cloneElement(endIcon, {
                color: finalTextColor,
                size: iconSize,
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
      // fontFamily is now set dynamically from theme
    },
  });
