import {
  useTheme,
  type ButtonColors,
  type ButtonSizes,
  type ButtonVariants,
} from '@materio/rn-materio-ui';
import React, { forwardRef } from 'react';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';
import { type ButtonRounded } from '../Button';

// Define the icon props interface
interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any; // Allow other props that might be needed by various icon components
}

export interface IconButtonProps extends RectButtonProps {
  children: React.ReactElement<IconProps>;
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: ButtonRounded;
}

export default forwardRef<typeof RectButton, IconButtonProps>(
  function IconButton(
    {
      onPress,
      children,
      variant = 'solid',
      color = 'neutral',
      size = 'md',
      rounded,
      ...props
    }: IconButtonProps,
    ref
  ) {
    const theme = useTheme();
    const sizeMap = {
      xs: { size: 18 },
      sm: { size: 24 },
      md: { size: 28 },
      lg: { size: 32 },
      xl: { size: 36 },
    };
    // Use theme.spacing for padding, mapped by icon button size
    const paddingConfig = {
      xs: theme.spacing.xs,
      sm: theme.spacing.sm,
      md: theme.spacing.md,
      lg: theme.spacing.lg,
      xl: theme.spacing.xl,
    };
    const padding = paddingConfig[size];
    // Use theme.borderRadius, mapped by size, respecting 'rounded' prop
    const borderRadiusConfig = {
      xs: theme.borderRadius.sm,
      sm: theme.borderRadius.md,
      md: theme.borderRadius.md,
      lg: theme.borderRadius.lg,
      xl: theme.borderRadius.xl,
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
    const borderWidthValue =
      variant === 'outline' ? theme.borderWidths.thin : 0;

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
    return (
      <RectButton
        ref={ref}
        testID="icon-button"
        onPress={onPress}
        style={{
          borderWidth: borderWidthValue,
          borderRadius: finalBorderRadius,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          padding: padding,
        }}
        {...props}
      >
        {React.cloneElement(children, {
          color: textColor,
          size: sizeMap[size].size,
        })}
      </RectButton>
    );
  }
);
