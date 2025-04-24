import {
  useTheme, type ButtonColors,
  type ButtonSizes,
  type ButtonVariants
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

    const colorBlock = theme.colorScheme.palette[color];
    const solidPairing = colorBlock.high;
    const softPairing = colorBlock.low;

    const padding = (sizeMap[size].size / sizeMap.xs.size) * 4;
    const borderRadius =
      rounded === 'none'
        ? 0
        : rounded === 'full'
          ? 9999
          : (sizeMap[size].size * 1) / 2;
    let borderColor = solidPairing.main;
    let backgroundColor = solidPairing.main;
    let textColor = solidPairing.contrast;

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
          borderWidth: variant === 'outline' ? 1 : 0,
          borderRadius: borderRadius,
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
